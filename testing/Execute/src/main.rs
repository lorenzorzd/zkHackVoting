use miden::{Assembler, execute, execute_iter, DefaultHost, StackInputs, ProvingOptions, prove, ProgramInfo, Kernel};
use miden_processor::ExecutionOptions;

fn main() {

    // instantiate the assembler
    let assembler = Assembler::default();

    // compile Miden assembly source code into a program
    let program = assembler.compile("begin push.3 push.5 add end").unwrap();
    

    // use an empty list as initial stack
    let stack_inputs = StackInputs::default();

    // instantiate a default host (with an empty advice provider)
    let mut host = DefaultHost::default();

    // instantiate default execution options
    let exec_options = ExecutionOptions::default();

    

    // let's execute it and generate a STARK proof
    let (outputs, proof) = prove(
        &program,
        stack_inputs.clone(),       // we won't provide any inputs
        host,               // we'll be using a default host
        ProvingOptions::default(),    // we'll be using default options
    )
    .unwrap();

    
    //let mut program_info = program.hash();

    let mut program_info = ProgramInfo::new(program.clone().hash(), Kernel::default());

    // let's verify program execution
    match miden::verify(program_info ,stack_inputs, outputs, proof) {
        Ok(_) => println!("Execution verified!"),
        Err(msg) => println!("Something went terribly wrong: {}", msg),
    }
    // execute the program with no inputs
    //let trace = execute(&program, stack_inputs.clone(), &mut host, exec_options).unwrap();

    // now, execute the same program in debug mode and iterate over VM states
    /*
        for vm_state in execute_iter(&program, stack_inputs, host) {
            match vm_state {
                Ok(vm_state) => println!("{:?}", vm_state),
                Err(_) => println!("something went terribly wrong!"),
            }
        }
     */
    

}