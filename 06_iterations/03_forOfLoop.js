/*
    The for...of loop in JavaScript is used to iterate over iterable objects,
    such as arrays, strings, Maps, Sets, or any object with a [Symbol.iterator] property. 
    It provides an elegant way to loop through the values of an iterable.

    for (const element of iterable) {
        // Code to execute for each element
    }
*/

let arr1 = [1,2,3,4,5];
for( const val of arr1){
    console.log(val);       // loops on iteratable values in list using for Of without using index
}

let arr2 = [
    ["Rohit","Thakur"],
    ["Abhay","Goyal"],
    ["Gopal", "Sharma"]
];

for( let [name, surname] of arr2){
    console.log(`Hello ${name} ${surname}`);
}

/*
    Map in JS
    The Map object holds key-value pairs and remembers the original insertion order of the keys. 
    Any value (both objects and primitive values) may be used as either a key or a value.

    Keys can be of any type: Strings, objects, numbers, etc.
    Maintains insertion order: Items are iterated in the same order they were inserted.
    Fast lookups: Designed for frequent additions and retrievals.
    Size property: Use map.size to get the number of entries.
*/

let map = new Map();    // Creating a map 
map.set('Rohit','Thakur');
map.set('Abhay','Goyal')

for( let [key,val] of map){
    console.log(`Hello ${key} ${val} in map`);
}
