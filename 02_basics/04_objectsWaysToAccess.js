
// Object Literals
// An object literal is a simple way to create an object in JavaScript using curly braces {}

const JUser = {
    name : "Rohit",
    age: 18,
    location: "Delhi",
    email: "rohit@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],

    "fullName" : "Rohit Thakur",
    "other Name" : "None"
}  

/*
    JUser object, all the keys (name, age, location, email, isLoggedIn and lastLoginDays) will be processed 
    as strings. This is the default behavior in JavaScript,
    where object keys (except for Symbol keys) are always treated as strings internally.
*/


// Two ways to access object values using keys
console.log( JUser.email)                   // But this way has some some problems
console.log( JUser["email"])

/*
    JUser."fullName"                            We can't access string key fullName like this in JS
    JUser["fullName"]  or JUser.fullaName       This is the way to access it's key

    The key "fullName" can be accessed using dot notation because it follows JavaScript's rules for 
    valid identifiers. However, "other Name" cannot be accessed using dot notation because it contains a space, 
    which is not allowed in identifiers.
*/

console.log(JUser.fullName)           // This String key Can be access like this
// console.log(JUser.other Name)      // Can't be access as it is a  invalid idemtifier of key in JS

/*
    Rules for Valid Identifiers (Dot Notation):

    Start with a letter (a-z or A-Z), an underscore (_), or a dollar sign ($).
    Subsequent characters can be letters, digits (0-9), underscores, or dollar signs.
    No spaces or special characters (except _ and $).
    Cannot be a reserved keyword in JavaScript (like if, for, var, etc.).
*/

const myObj = {
    name: "John",           // valid (starts with a letter)
    _age: 30,               // valid (starts with an underscore)
    $salary: 5000,          // valid (starts with a dollar sign)
    city7: "New York",      // valid (contains letters and numbers)
    number_Of_Friends: 10   // valid (contains letters and underscores)
};

const myObject = {
    "first name": "John",     // Invalid (contains space)
    "123age": 30,             // Invalid (starts with a number)
    "full-name": "Doe",       // Invalid (contains hyphen)
    "special@key": "value"    // Invalid (contains special character)
};

// Correct access with bracket notation:
console.log(myObject["first name"]);   // Output: "John"
console.log(myObject["123age"]);       // Output: 30
console.log(myObject["full-name"]);    // Output: "Doe"
console.log(myObject["special@key"]);  // Output: "value"


// Reserved Keyword Example in an Object:
const wrongKeysObj = {
    var: "This is a reserved keyword",   // Using 'var' as a key
    function: "Also a reserved keyword", // 'function' as a key
    return: "Not allowed"                // 'return' as a key
};

// Trying to access them with dot notation will cause errors:
console.log(wrongKeysObj.var);        // SyntaxError: Unexpected token 'var'
console.log(wrongKeysObj.function);   // SyntaxError: Unexpected token 'function'
console.log(wrongKeysObj.return);     // SyntaxError: Unexpected token 'return'