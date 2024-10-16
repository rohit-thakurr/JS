const user = {
    name: "Alice",
    age: 30,
    occupation: 'SDE',
    isLogged : true,
    address: {
      city: "New York",
      zip: "10001"
    }
};

const {age} = user;
const {Age} = user;
const {randomAge} = user;

console.log(age)     // 30  Destructures 'age' from 'user'
console.log(Age)     // undefined  Looks for 'Age' property, but it doesn't exist in object
console.log(randomAge)  // undefined  Looks for 'randomName' property, but it doesn't exist in object

/*
    Case-sensitivity: Property names like age and Age are treated differently due to case-sensitivity.
    Destructuring undefined properties: When you destructure a property that doesn't exist in the object, 
                                        it will default to undefined.
*/

const { name : Name, randomName = "Not Available" } = user;
// name: Name assigns the value of the name property ("Alice") to the variable Name.
// If ramdomName property does not exit than it sets a default value to it

console.log(Name,randomName)     // Alice  Not Available

const {occupation = 'Designer'} = user;  
/*
  With the default value in destructuring, the variable takes the value from the object if the property exists. 
  If the property is missing or undefined, the default value is used.
*/


const {isLogged : checkIn, address : { city }} = user; // Nested Object Destructuring
console.log(checkIn,city)

