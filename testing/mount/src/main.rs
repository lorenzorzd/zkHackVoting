
use miden::{Assembler, execute, execute_iter, MemAdviceProvider, StackInputs};


fn main() {

    // instantiate the assembler
    let assembler = Assembler::default();
    
    // compile Miden assembly source code into a program
    let program = assembler.compile("begin push.3 push.5 add end").unwrap();
    
    // use an empty list as initial stack
    let stack_inputs = StackInputs::default();
    
    // instantiate an empty advice provider
    let mut advice_provider = MemAdviceProvider::default();
    
    // execute the program with no inputs

}



