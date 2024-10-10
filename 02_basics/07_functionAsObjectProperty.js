let newUser = "Mihir"
let Sym1 = Symbol("123")
let Sym2 = Symbol("123")

const JUser = {
    name : "Rohit",
    age: 18,
    location: "Delhi",
    email: "rohit@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],

    "fullName" : "Rohit Thakur",
    "other Name" : "None",

    [newUser] : "User Mihir",
    [Sym1] : "first one",
    [Sym2] : "second one"
} 

// Declaring an Object with Function Properties
JUser.greetings = () => {
    console.log("Greet User")
}

JUser.greetings();

console.log(JUser.greetings)
/*
    JUser.greetings is a reference to the function defined in the object.
    You can use it to call the method, or you can assign it to another variable or pass it as an argument.
*/

 // Uisng this in regular functions you can access the properties of objects where this function as a property is defined
JUser.greetingsTwo = function() {           
    console.log(`Greeting User ${this.name}`)
}

/*
     Arrow functions in JavaScript have a different behavior regarding the this context.
     Arrow functions do not have their own this. Instead, 
     they inherit this from the surrounding lexical scope at the time they are defined.

     This means that this inside an arrow function refers to the this value from the enclosing context
     where the arrow function was created,not the object from which the method is being called.
*/
JUser.greetingsThree = () => {
    console.log(`Greeting User ${this.name}`);    // 'this' refers to the enclosing lexical scope
}

JUser.greetingsTwo()          
JUser.greetingsThree()