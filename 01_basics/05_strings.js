
const name = "rohit"             // Primitive string -> value stored in stack.
                                //  typeOf -> String
const repo = 50

// console.log( name + repo + " value")    Oudated way of using string concatination

console.log(`My name is ${name} and my repo count is ${repo}`)  // Using string interpolation

let gameName = new String("Vhagar")   // Object string  -> value stored in heap
                                     //  typeOf -> Object

                                   
let uppercased = gameName.toUpperCase();
                                     
console.log(typeof gameName);    // Output: "object"
console.log(typeof uppercased);  // Output: "string"

/*
    typeof gameName returns "object" because gameName is an instance of the String object, 
    not a primitive string.
    The .toUpperCase() method converts the internal string value "Vhagar" to uppercase 
    and returns a new primitive string "VHAGAR".
    This new string is not an object but a primitive string.

    gameName is stored in the heap memory because it is an object.
    uppercased is a primitive string and is stored in the stack memory (where primitive types are stored).
*/

console.log( gameName.charAt(2))
console.log( gameName.indexOf('h'))
console.log( gameName.includes('ha'))

const newName = gameName.substring(1,4)
//console.table([gameName , newName, typeof gameName, typeof newName])

const trimName = "    rohit   "
const trimmedName = trimName.trim()

//console.table([trimName, trimmedName])

const url = "https://hitesh.com/hitesh%20choudhary"
console.log( url.replace("%20", "-"))

console.log( url.split('/'))