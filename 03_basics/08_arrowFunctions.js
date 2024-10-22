
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