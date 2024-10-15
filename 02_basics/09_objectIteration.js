const user  = {
    Id : 1,
    name : "Rohit",
    work : "SDE"
}

console.log(Object.keys(user))           // To get all the keys in objects
console.log(Object.values(user))         // To get all values of keys


const peoples = [
    { name: "John", age: 25, occupation: "Engineer" },
    { name: "Jane", age: 28, occupation: "Doctor" },
    { name: "Mike", age: 32, occupation: "Teacher" }
];

// Iterating over peoples array & then applying object function on each objects
peoples.map( (people) => {
    console.log(Object.values(people))
})