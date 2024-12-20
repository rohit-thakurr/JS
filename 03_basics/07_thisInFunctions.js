
function myFunc(){
    userJob = "SDE"         // Implicitly creates a global variable
    let userName = "Rohit"  // Block-scoped variable

    console.log(this)       // Outputs: global object
    /*
        When you define a function (like myFunc() in your example) and call it,
        the context of this changes depending on how the function is invoked.
        (  mean that the function is executed without being attached to any specific object. 
        In other words, it is invoked directly, rather than as a method of an object.)

        If the function is called in the global context (not as a method of an object), 
        this inside that function refers to the global object (global in Node.js).
    */
    console.table([this.userJob,this.userName])
}



console.log(this)
/*
    In a Node.js module, this at the top level refers to an empty object that represents the module itself, 
    not the global object.(Basically current module export object)
    This is why you see an empty object when you do console.log(this); at the top level of your file.

    In js file, this at the top level does not refer to the global object (global),
    but rather to the module exports object, which is an empty object {} by default.

    But if When you open an HTML page that references your js file(same file), and the browser runs the script,
    then this keyword at the top level refers to the global object, which is window in the browser.

    So basically same keyword this in terminal gives {} object & global object in browser console.
*/


myFunc();

module.exports.add = function(a, b) {
    return a + b;
};             // Now we have exported this function from this file which gets added to module export object


console.log(this)        // { add: [Function (anonymous)] }     


const arrowFunc = () => {
    console.log(this);       // Now it will also return module export object
}

arrowFunc();



/*
    Summary of this keyword

    1. this keyword in js file at top level (not in any functions or object) 
        -> returns window object in browser console.
        -> returns module export object of that js file in terminal

    2. this keyword in function returns different values in regular function & arrow function
        -> In regular functions this keyword returns global object.
        -> In arrow functions this keyword returns module export object of that js file in terminal & 
           global object in browser console.

*/


console.log(this)          // {} object -> module export object
function chai(){
    console.log(this)      // global object
}

const sutta = function badiAdvance(){
    console.log(this);     // global object
}

const daaru = () => {
    console.log(this)      // {} object
}

chai();
sutta();
daaru();

/*
    If you try to access this keyword in function without accession & calling it without object then this refers
    to global object.

    In js file, this at the top level does not refer to the global object (global),
    but rather to the module exports object, which is an empty object {} by default.

    In arrow function this refers to module exports object
*/