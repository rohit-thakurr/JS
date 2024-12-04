// In JavaScript, the execution context refers to the environment in which the JavaScript code is evaluated and executed.

/*
    Type of Execution Context -> Global, Function, Eval(rarely)

    1. Global Execution Context:
        This is the default context that is created when a JavaScript program starts executing.
        It's where all global variables and functions are defined as object in this keyword.
        When JavaScript runs in the global scope (outside of any functions or classes),this refers to the global window object.

        When JavaScript runs in a Node.js environment, the global object is different.
        Here, this refers to the module.exports object in the context of the file/module.

        So basically whenever a js file is run a global execution context is created
        and that execution context as an object is placed in this keyword

    2. Function Execution Context:
        A function execution context is a type of execution context that is created whenever a function is invoked in JS. 
        This context manages the environment in which a function’s code is executed, including variables, functions,
        and the this keyword within the function.
        Every time a function is called, a new execution context is created and pushed onto the call stack.
*/



// Phases of Execution context

/*
    1. Memory Creation Phase
        The memory creation phase in JavaScript occurs during the first stage of an execution context's lifecycle. 
        This phase is responsible for setting up the environment needed for code execution.
        The JavaScript engine scans the code & Memory is allocated for variables, functions, and objects.
        Hoisting takes place, where function and variable declarations are moved to the top of their scope.


    2. Execution Phase
        After the creation phase, the execution phase begins. This is when the actual code inside the execution context is executed.
        During this phase, Variables are assigned values from their respective code expressions.
        Functions are invoked, and their code is executed.
        this is used, and code is executed line by line as per the instructions.
*/

