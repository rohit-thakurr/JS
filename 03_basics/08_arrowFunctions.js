
/*
    An explicit arrow function in JavaScript is an arrow function that includes the return statement 
    to specify what value should be returned from the function. 
    This type of function can have one or multiple statements in its body,
    enclosed in curly braces, and requires the use of the return keyword to return a value.
*/

const explicitFunc = (num1,num2) => {
    return num1 + num2;        // Explicit return (have curly braces and return statement to return something)
}


/*
    An implicit arrow function in JavaScript is an arrow function that does not use curly braces 
    around the function body. 
    In this case, the expression following the arrow (=>) is automatically returned
    without the need for a return statement.

    Can convert any one liner explicit function to implicit
*/
const implicitFunc = (num1, num2) => num1 * num2;  
console.log( implicitFunc(1,2) )          

const implicitFunc2 = (num1 , num2) => { name : "Rohit"};    // Will return undefined
console.log(implicitFunc2(1,2));

const implicitFunc3 = (num1,num2) => ({ name : "Thakur"})     // Now it will return value as object wrraped in ()
console.log( implicitFunc3(1,2))

/*
    Arrow functions can have an implicit return if you omit the curly braces ({})
    around the function body. In such cases, the function automatically returns the result of the expression
    that follows the arrow (=>).
    like in this case -> const implicitFunc = (num1, num2) => num1 * num2;  It returned value


    Why Your implicitFunc2 Returns undefined ?
    When you use curly braces ({}) in an arrow function, JavaScript interprets this as the start of a block,
    not an object literal. Within a block, 
    if you don't explicitly use the return keyword, the function returns undefined by default.

    It takes implicitFunc2 function like this
    const implicitFunc2 = (num1, num2) => {
            name: "Rohit"; // This is interpreted as a labeled statement, not an object
    };

    & here it is actually an explicit function with no return value so it return undefined.



    Why Your implicitFunc3 Works ?
    When you wrap the object literal in parentheses (), 
    it forces JavaScript to interpret the content as an expression, not a block.
    This is because parentheses have higher precedence and create an explicit grouping.
*/