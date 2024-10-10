
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

JUser.age = 20;       // Change in Object property value
Object.freeze(JUser)
JUser.age = 21;

/*
    The Object.freeze() method in JavaScript is used to make an object immutable.
     This means that after freezing an object:

    No new properties can be added to the object.
    Existing properties cannot be removed.
    Values of existing properties cannot be changed 
    (though shallow copies or referenced values can still be modified if they refer to non-primitive values
    like arrays or objects).
    The object cannot be reconfigured or extended in any way.
*/

console.log(JUser)

/*
    Shallow freeze: If the object contains nested objects or arrays (like lastLoginDays), 
    they are not frozen—you can still modify the contents of arrays or other nested objects.
*/

JUser.lastLoginDays.push("Sunday");
console.log(JUser)

/*
    Basically when you freeze an object like JUset you can't change it properties values, make it immutable
    So you can't do something like JUser.age = 21, because you are changing it's values.

    So you can't do something like lastLoginDays = ["Tuesday"] because it change it reference point value as property
    which is immutable. 
    But you can still do lastLoginDays.push("Tuesday") , because you are not changing lastLoginDays property value that is
    it reference but just making changes in the array at the same location because that is mutable.
   
*/

