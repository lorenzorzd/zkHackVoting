use rocket::*;
use rocket::http::Header;
use rocket::{Request, Response};
use rocket::fairing::{Fairing, Info, Kind};
use miden::{
    execute, execute_iter, prove, verify, Assembler, Kernel, MemAdviceProvider,
    ProgramInfo, ProofOptions, StackInputs,
};
use miden_stdlib::StdLibrary;

//Code for running locally
pub struct CORS;
#[rocket::async_trait]
impl Fairing for CORS {
    fn info(&self) -> Info {
        Info {
            name: "Attaching CORS headers to responses",
            kind: Kind::Response
        }
    }

    async fn on_response<'r>(&self, _request: &'r Request<'_>, response: &mut Response<'r>) {
        response.set_header(Header::new("Access-Control-Allow-Origin", "*"));
        response.set_header(Header::new("Access-Control-Allow-Methods", "POST, GET, PATCH, OPTIONS"));
        response.set_header(Header::new("Access-Control-Allow-Headers", "*"));
        response.set_header(Header::new("Access-Control-Allow-Credentials", "true"));
    }
}




#[get("/hello")]
fn hello() -> String {
    format!("Hello, WIRK!")
}

//JSON POST REQUEST
use std::borrow::Cow;

use rocket::State;
use rocket::tokio::sync::Mutex;
use rocket::serde::json::{Json, Value, json};
use rocket::serde::{Serialize, Deserialize};

type Id = usize;

type MessageList = Mutex<Vec<String>>;
type Messages<'r> = &'r State<MessageList>;

#[derive(Serialize, Deserialize)]
#[serde(crate = "rocket::serde")]
struct Message<'r> {
    id: Option<Id>,
    message: Cow<'r, str>
}

#[post("/", format = "json", data = "<message>")]
async fn new(message: Json<Message<'_>>, list: Messages<'_>) -> Value {
    let mut list = list.lock().await;
    let id = list.len();
    list.push(message.message.to_string());

    // instantiate the assembler with the standard library

    let assembler = Assembler::default()
        .with_library(&StdLibrary::default())
        .map_err(|err| format!("Failed to load stdlib - {}", err))
        .unwrap()
        .with_debug_mode(true);

    // compile Miden assembly source code into a program
    // this program will add two numbers (3 and 5) on the stack
    // you can change this to any other Miden program
    // check out our examples
    
    let program = assembler
        .compile("begin push.3 push.5 add end")
        .map_err(|err| format!("Failed to compile program - {}", err))
        .unwrap();

    // we also create some program_info
    let program_info = ProgramInfo::new(program.clone().hash(), Kernel::default());

    // use an empty list as initial stack
    let stack_inputs = StackInputs::default();

    // instantiate an empty advice provider
    let mut advice_provider = MemAdviceProvider::default();

    // execute 

    let _trace = execute(&program, stack_inputs.clone(), &mut advice_provider).unwrap();

    // now, execute the same program in debug mode and iterate over VM states

    for vm_state in execute_iter(&program, stack_inputs, advice_provider) {
        match vm_state {
            Ok(vm_state) => println!("{:?}", vm_state),
            Err(_) => println!("something went terribly wrong!"),
        }
    }

    // let's execute it and generate a STARK proof

    let (outputs, proof) = prove(
        &program,
        StackInputs::default(),                                         // we won't provide any inputs
        MemAdviceProvider::default(),                              // we won't provide advice inputs
        ProofOptions::default(),                                        // we'll be using default options
    )
    .unwrap();

    // the output should be 8
    assert_eq!(Some(&8), outputs.stack().first());

    // let's verify program execution
    
    match verify(program_info, StackInputs::default(), outputs, proof) {
        Ok(_) => println!("Execution verified!"),
        Err(msg) => println!("Something went terribly wrong: {}", msg),
    }
    
    
    
    json!({ 
        "status": "ok", 
        "id": id 
    })

}






#[put("/<id>", format = "json", data = "<message>")]
async fn update(id: Id, message: Json<Message<'_>>, list: Messages<'_>) -> Option<Value> {
    match list.lock().await.get_mut(id) {
        Some(existing) => {
            *existing = message.message.to_string();
            Some(json!({ "status": "ok" }))
        }
        None => None
    }
}

#[get("/<id>", format = "json")]
async fn get(id: Id, list: Messages<'_>) -> Option<Json<Message<'_>>> {
    let list = list.lock().await;

    Some(Json(Message {
        id: Some(id),
        message: list.get(id)?.to_string().into(),
    }))
}

#[catch(404)]
fn not_found() -> Value {
    json!({
        "status": "error",
        "reason": "Resource was not found."
    })
}

pub fn stage() -> rocket::fairing::AdHoc {
    rocket::fairing::AdHoc::on_ignite("JSON", |rocket| async {
        rocket.mount("/json", routes![new, update, get])
            .register("/json", catchers![not_found])
            .manage(MessageList::new(vec![]))
    })
}



#[options("/<path..>")]
fn options(path: std::path::PathBuf) -> &'static str {
    ""
}

//MOUNT WEB SERVER
#[launch]
fn rocket() -> _ {
    rocket::build()
        .attach(CORS)
        .attach(stage())
        .mount("/", routes![hello,new,options])
}