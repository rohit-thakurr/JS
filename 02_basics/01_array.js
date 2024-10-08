
const myArray = [1,2,3,4,5]
/*
    The Array object, as with arrays in other programming languages, 
    enables storing a collection of multiple items under a single variable name, 
    and has members for performing common array operations.
    So you can even create collection of different datatypes as well

    myArray = [1,"two",false, [1,2,3,"string"]]

    JavaScript array-copy operations create shallow copies.
    A shallow copy of an object is a copy whose properties share the same references 
    (point to the same underlying values) as those of the source object from which the copy was made.
    As a result, when you change either the source or the copy,
    you may also cause the other object to change too
*/

const myArray2 = new Array(1,2,3,4)  // Second way to intialize array
// myArray.push("string")
// myArray.push(true)
// myArray.pop()

myArray.unshift(10)   
// Push element at the first index of array, time consuming as it will shift all other ele 1 index left
myArray.shift()  // Same as pop elemenet just pop the first index element here

myArray.includes(9) // Give true or false
myArray.indexOf(9)  // If 9 present than gives it index otherwise -1

const newArr = myArray.join("/")
/*
    The .join() method in JS is used to concatenate all the elements of an array into a single string.
     By default, it uses a comma (,) as the separator between the elements, 
    but you can specify a custom separator if you want.

    array.join([separator])
*/

console.log(myArray)
console.log(newArr)

/*------------------- slice && splice--------------------------*/

console.log("Original Array", myArray)
console.log("Slice Array" , myArray.slice(1,4))  
console.log("Original Array after slice", myArray)
/*
    Used to create a shallow copy of a portion of an array without modifying the original array.

    Syntax: array.slice(start, end)
    start: The index to start extraction (inclusive).
    end (optional): The index before which to stop extraction (exclusive). If omitted, slices to the end of the array.
*/

const originalArray = [1, 2, false, [4, 5]]; // Original array
const slicedArray = originalArray.slice(1,4);  // Returns a copy of section of an array

slicedArray[0] = 40
slicedArray[2][0] = 100
console.log("Sliced Array",slicedArray)         // [ 40, false, [ 100, 5 ] ]
console.log("Original Array", originalArray)    //  [ 1, 2, false, [ 100, 5 ] ]

/*
    Now originalArray = [1, 2, false, [4, 5]]
    primitive datatypes like 1,2,false stored directly in stack memory
    non-primitive datatypes like [4,5] stored in heap memory

    So in slicedArray it wll create copy of primitive values & take reference of non-primitive values
    slicedArray[0] = 40    
    Doing this it will not change values in originalArray because primitive datatypes are copied from originalArray
    And changes we are making in copied values

    slicedArray[2][0] = 100
    Doing this  will  change values in originalArray because non-primitive datatypes are actually reference of 
    originalArray data, And we make making chanages in original data locations
*/

const myArrOne = [1, 2, 3, 4, 5];
const splicedArray = myArrOne.splice(1,2)  // From index 1 delete the next two elements

console.table([myArrOne,splicedArray])     // [1,4,5] && [2,3]

/*
    In JavaScript, the splice() method is used to add, remove, 
    or replace elements in an array by directly modifying the original array. 
    It is a powerful tool for making changes in-place, unlike slice(), 
    which returns a shallow copy and doesn't alter the original array.

    array.splice(start, deleteCount, item1, item2, ...)
    start: The index at which to start changing the array.
    deleteCount: The number of elements to remove (can be 0 if you just want to insert elements).
    item1, item2, ...: The elements to add to the array, starting from the start index (optional).
*/

const myArrTwo = [1,2,[3,4],5,6]
const splicedArr2 = myArrTwo.splice(1,2,[101,102]);
console.log([myArrTwo,splicedArr2])




