use miden::{Assembler, execute, execute_iter, DefaultHost, StackInputs};
use miden_processor::{ExecutionOptions, ProgramInfo, Kernel, AdviceProvider, MemAdviceProvider, AdviceInputs, AdviceInjector, math::Felt, StackOutputs};
use miden_prover::{prove, ProvingOptions};
use miden_verifier::verify;
use rand::prelude::*;


fn main() {

    // instantiate the assembler
    let assembler = Assembler::default();
    
    // compile Miden assembly source code into a program
    //let program = assembler.compile("").unwrap();
    
    let source = format!(
        "
        begin
            adv_push.3
            push.0
            eq
            if.true
                push.1
                add
            else
                swap
                push.1
                add
                swap
            end 
        end
        ",
    );
    let program = Assembler::default().compile(&source).unwrap();

    // Init Candidate and Index Variables
    let mut candidate_1 = Felt::from(0_u32);
    let mut candidate_2 = Felt::from(1_u32);

    let mut vote_index = Felt::from(0_u32);


    // START STRESS TESTING
    //Creating the random index 

    let mut count = 0;

    while count != 1 {
        count += 1;
        println!("Vote Count: {}",count);

        let mut rng = rand::thread_rng();
        let vote_index = if rng.gen::<bool>() {
            Felt::from(0_u32)
        } else {
            Felt::from(1_u32)
        };
    
        //populate advice stack with unsifn integer values 

        let mut candidate_1 = Felt::from(0_u32);
        let mut candidate_2 = Felt::from(0_u32);
        let mut vote_index = Felt::from(0_u32); 
        
        let mut populated_stack: Vec<Felt> = vec![Felt::from(candidate_1), Felt::from(candidate_2), Felt::from(vote_index)]; // Candidate1 Count, Cantidate2 Count, Index of ote

        // Create an AdviceInputs instance with the populated stack.
        let advice_inputs = AdviceInputs::default().with_stack(populated_stack);
    
        // Create a MemAdviceProvider using the AdviceInputs.
        
        let advice_provider = MemAdviceProvider::from(advice_inputs);
        let host: DefaultHost<MemAdviceProvider> = DefaultHost::new(advice_provider);

        // Create a DefaultHost using the MemAdviceProvider.
        
        
        // instantiate default execution options
        //let exec_options = ExecutionOptions::default();
        
        //PROVING

        let (outputs, proof) = prove(
            &program,
            StackInputs::default(),                                            // we won't provide any public inputs
            DefaultHost::from(host),                                    // we'll be using a default populated with advide provider
            ProvingOptions::default(),                                              // we'll be using default options
        )
        .unwrap();

        println!("OUTPUTS: {:?}",outputs); 
    
        let stack_element = &outputs.stack()[..2];

        candidate_1 = Felt::from(stack_element[1]);
        candidate_2 = Felt::from(stack_element[0]);

        

        //let new_proof = proof.stark_proof().get_trace_info().length();

        //println!("Stark: {:?}", new_proof);


        
    }

    
    /*
    
    
    
     
    //populate advice stack with unsifn integer values  
    let populated_stack: Vec<Felt> = vec![Felt::from(candidate_1), Felt::from(candidate_2), Felt::from(vote_index)]; // Candidate1 Count, Cantidate2 Count, Index of ote

    // Create an AdviceInputs instance with the populated stack.
    let advice_inputs = AdviceInputs::default().with_stack(populated_stack);
 

    // Create a MemAdviceProvider using the AdviceInputs.
    let advice_provider = MemAdviceProvider::from(advice_inputs);
    println!("{:?}",advice_provider);


    // Create a DefaultHost using the MemAdviceProvider.
    let host = DefaultHost::new(advice_provider);

    
    // instantiate default execution options
    let exec_options = ExecutionOptions::default();
    
    //PROVING
    let (outputs, proof) = prove(
        &program,
        StackInputs::default(),                 // we won't provide any inputs
        DefaultHost::from(host),             // we'll be using a default host
        ProvingOptions::default(),    // we'll be using default options
    )
    .unwrap();

    println!("OUTPUTS:");

    println!("{:?}",outputs);




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
    
    //Verify Execution 

    /*
    match verify(program.hash(), StackInputs::default(), &[8], proof) {
    Ok(_) => println!("Execution verified!"),
    Err(msg) => println!("Something went terribly wrong: {}", msg),
    }
     */
    
*/
}