use miden::{Assembler, execute, execute_iter, DefaultHost, StackInputs};
use miden_processor::{ExecutionOptions, ProgramInfo, Kernel, AdviceProvider, MemAdviceProvider, AdviceInputs, AdviceInjector, math::Felt};
use miden_prover::{prove, ProvingOptions};
use miden_verifier::verify;

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
    let mut candidate_2 = Felt::from(0_u32);

    let mut vote_index = Felt::from(1_u32);


    
    let populated_stack: Vec<Felt> = vec![Felt::from(candidate_1), Felt::from(candidate_2), Felt::from(vote_index)]; // Candidate1 Count, Cantidate2 Count, Index of ote

    // Create an AdviceInputs instance with the populated stack.
    let advice_inputs = AdviceInputs::default().with_stack(populated_stack);
    println!("{:?}",advice_inputs);


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
    

}