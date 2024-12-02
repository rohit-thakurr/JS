// Immediately invoked function expressions

/*
    An IIFE (Immediately Invoked Function Expression) in JavaScript is a function that is defined
    and immediately executed. 
    It doesn’t need to be called explicitly because it’s invoked right after being defined. 

    IIFE prevents polluting the global variables, we mean that the variables and functions declared
    inside an IIFE do not interfere with or overwrite variables in the global scope.
    Polluting global variables means unintentionally sharing or overwriting variables in the global scope,
    and IIFEs help avoid this by creating a private, isolated scope.
*/


let time = 7;

function tea() {
    time = 8; // Polluting the global variable
    console.log(`Tea Time at ${time}`); // Logs: "Tea Time at 8"
}

tea();
console.log(time); // Logs: 8 (global variable modified)

let name = "Rohit";  // For passing arguments in iife functions
(function(name){
    let time = 9; // Local variable within IIFE
    console.log(`Tea Time at ${time} of ${name}`); // Logs: "Tea Time at 9"
})(name);

console.log(time); // Logs: 8 (global variable remains unchanged)


/*
    Why Use an IIFE?
    
    1. Avoid Polluting the Global Scope:
        Variables and functions inside an IIFE are scoped locally to the function.
        This is useful in large codebases or when combining scripts from multiple sources.

    2. Encapsulation:
        Helps modularize code by isolating specific logic into a self-contained block.

    3. Avoid Name Conflicts:
        Prevents variable name clashes in projects with multiple scripts.

    4. Execute Code Immediately:
        Useful for initialization code that needs to run only once.

    5. Prevent Hoisting Issues:
        Variables declared inside an IIFE are not hoisted outside its scope.

*/