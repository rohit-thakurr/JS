// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);              true ( converts "2" into number for comparision)
// console.log("02" > 1);             true

console.log(null > 0);             //false ( converts null to number 0, 0>0 -> false)
console.log(null == 0);            //false

/*The equality (==) operator does not perform type conversion in the same way here.
 In this case, null is only loosely equal to undefined, but not to 0. So, null == 0 is false 
 because null and 0 are of different types and are not considered equal under loose equality.
*/

console.log(null >= 0);           // true ( converts null to number 0, 0>=0 -> true)

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

// === 

console.log("2" === 2);