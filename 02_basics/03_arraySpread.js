/*
    The spread operator (...) in JS allows you to spread out the elements of an iterable 
    (such as arrays, objects, or strings) into individual elements.
    spread operator creates a shallow copy of an array.

    The spread operator creates a new array, but it copies only the references for non-primitive elements 
*/

const marval_heros = ["thor", "ironMan","spiderMan",["Rohit","Abhay"]]
const dc_heros = ["superMan","flash","batMan"]

const all_heros = [...marval_heros,...dc_heros]

marval_heros[3][0] = "Hulk"
marval_heros[0] = "Black Panther"

console.log(all_heros)       
/*
     Hulk changed in all_heros not black Panther because ["Rohit","Abhay"] this array
     has the same refernce in both arrays
     Reason is the way primitive & non-primitive values stored in memory & spread operator perform shallow
     copying resulting in coping in values stored in stack memory with copy of reference of heap from one 
     location to other in stack.
*/
console.log(marval_heros)



const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

/*
    The flat() method in JavaScript is used to flatten nested arrays into a single-level array. 
    By default, it only flattens arrays one level deep, 
    but you can specify a depth if you want to flatten deeper nested arrays.

    array.flat(depth); 
    depth (optional): The level of nesting to flatten. Default is 1

    flat() method performs shallow copying when flattening arrays in JavaScript.
*/

const originalArray = [1, 2, [3, 4, { a: 5 }]];
const flatArray = originalArray.flat();

console.log(flatArray);  // Output: [1, 2, 3, 4, { a: 5 }]

// Modify the object in the flat array
flatArray[4].a = 10;

console.log(flatArray);       // Output: [1, 2, 3, 4, { a: 10 }]
console.log(originalArray);   // Output: [1, 2, [3, 4, { a: 10 }]]



/*-----------------------------------------------------------------------------------------------------*/

console.log(Array.isArray("Hitesh"))       // Output: false
console.log(Array.isArray([1, 2, 3]));     // Output: true

// The Array.from() method in JavaScript creates a new array instance from an array-like or iterable object
console.log(Array.from("hitesh"))          // [ 'h', 'i', 't', 'e', 's', 'h' ], place iterables into array elements
console.log(Array.from({name: "hitesh"})) //  Output: [] As it don't know how to iterate


let score1 = 100
let score2 = 200
let score3 = 300

// of method is used to return a new array from a set of elements( elements can be variables, list etc)
console.log(Array.of(score1, score2, score3, [1,2,3]));   // [ 100, 200, 300, [ 1, 2, 3 ] ]