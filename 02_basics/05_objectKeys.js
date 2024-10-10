
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

console.log( JUser.newUser)     // undefined because there is no key named newUser in JUser object
console.log( JUser.Mihir)       // newUser = "Mihir" give this value
console.log(JUser["newUser"])   // "newUser" don't present as a key so undefined
console.log(JUser[newUser])     // [newUser] => ["Mihir"] in strings so it give value
console.log(JUser["Mihir"])     // ["Mihir"] => directly acess using key so gives values

/*
    In your object definition, the key [newUser] is a computed property. 
    This means that the value of the variable newUser ("Mihir") is used as the key for that property 
    not newUser property itself.

    Console.log(JUser.newUser)

    Output: undefined
    Explanation: When using dot notation, JavaScript looks for an exact key named "newUser" in the JUser object. 
    Since the object does not have a key named "newUser" (it has a key named "Mihir" instead), it returns undefined.
    console.log(JUser.Mihir)

    Output: "User Mihir"
    Explanation: Here, you are directly trying to access the property named "Mihir" using dot notation.
     Since newUser is equal to "Mihir", the object has a key with that name, so it returns the value "User Mihir".
    console.log(JUser["newUser"])

    Output: undefined
    Explanation: Similar to the first case, this accesses the object using bracket notation to look for a key named "newUser". 
    Since there is no such key in JUser, it returns undefined.
    console.log(JUser[newUser])

    Output: "User Mihir"
    Explanation: In this case, you are using bracket notation with the variable newUser, 
    which evaluates to "Mihir". Therefore, this expression accesses the key "Mihir" in the JUser object and 
    returns the corresponding value "User Mihir".
    console.log(JUser["Mihir"])

    Output: "User Mihir"
    Explanation: Here, you're using bracket notation to directly access the key "Mihir". 
    Since this key exists in the object, it returns the value associated with that key, which is "User Mihir".
    
    Summary of Key Takeaways
    Dot Notation: Looks for the exact name of the key. If the key does not exist (like "newUser"), it returns undefined.
    Bracket Notation: Allows dynamic access to keys based on variable values. If you use JUser[newUser], it effectively looks for the key "Mihir", as the value of newUser is "Mihir".
    The key "Mihir" exists in JUser, but the key "newUser" does not, which explains the different outputs.
*/


/*
    In Short when we are trying to find value using key as newUser variable than it tries to find key name this in object
    JUser.newUser tries to find key "newUser" which actually don't present
*/
console.log(JUser[Sym1])      // Correct way to access symbol
console.log(JUser[Sym2])      



