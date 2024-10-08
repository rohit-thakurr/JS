const marval_heros = ["thor", "ironMan","spiderMan"]
const dc_heros = ["superMan","flash","batMan"]

//marval_heros.push(dc_heros);

const combined_heros = marval_heros.concat(dc_heros)
console.table([marval_heros,combined_heros])

/*
    The concat() method in JavaScript is used to merge two or more arrays.
    It creates a new array by combining the existing arrays or values provided as arguments,
    without modifying the original arrays. 
    This method is non-destructive, meaning the original arrays remain unchanged.

    const newArray = array1.concat(array2, array3, ..., value1, value2, ...);
    concat returns a new array stored in newArray variable
*/

const array1 = [1, 2];
const array2 = [3, 4];
const array3 = [5, 6];

const result = array1.concat(array2, array3);  // Concat multiple Arrays

console.log(result);  // Output: [1, 2, 3, 4, 5, 6]
console.log(array1);  // Output: [1,2]
console.log(array2);  // Output: [3,4]
console.log(array3);  // Output: [5,6]  Here Original Arrays dont change 


//  Concatenating Arrays and Values
const newArr = [1, 2];
const newResult = newArr.concat(3, 4, [5, 6]);

console.log(newResult);  // Output: [1, 2, 3, 4, 5, 6]

// Nested Arrays (1-level Deep)

const nestedArr1 = [1];
const nestedArr2 = [[2, 3]];  // Nested array

const nestedResult = nestedArr1.concat(nestedArr2);

console.log(nestedResult);  // Output: [1, [2, 3]] (nested array remains nested)
