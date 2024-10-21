
addTwoNumbers(2,3);   // You can call JS functions before it's function declaration.

function addTwoNumbers(num1,num2) {
    console.log(num1 + num2);
}

/*
    You can call this function before its declaration because function declarations are hoisted to the top of their scope.
    Hoisting means that during the compilation phase,
    JavaScript moves the entire function declaration to the top of the scope.
*/


multiplyTwo(2,3);           //  // ReferenceError: Cannot access 'multiplyTwo' before initialization
// This is also a function but also called function expression
const multiplyTwo = function(num1,num2){          // This is also called function and also expression
    console.log(num1 * num2)
}


/*
    Function expressions, like the one above, are not hoisted in the same way as function declarations.
    In this case, only the variable declaration (multiplyTwo) is hoisted, but not its assignment.
    So until the line where the function is assigned, the variable multiplyTwo is treated as undefined.
*/