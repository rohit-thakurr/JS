/*
    The nullish coalescing operator (??) in JavaScript is used to provide a default value 
    when dealing with null or undefined.
    It is especially useful when you want to handle cases where a value might be explicitly null or undefined

    Synatx -> let result = value1 ?? value2
    value1 is the primary value being checked.
    value2 is the fallback value, which is used if value1 is null or undefined.

    Only checks for null or undefined. 
    It does not consider other falsy values (0, false, NaN, or "") as triggers to use the fallback value.
*/

let val1 = 5 ?? 10;     // val1 = 5

val1 = null ?? 10;
val1 = null ?? undefined;           // val1 = undefined
val1 = undefined ?? null;           // val1 = null
val1 = undefined ?? null ?? 100;
/*
     Basically this operator start assessing the values from lhs & move to rhs values if null of undefined value & at last
     takes the value of most rhs value, even if it's null, undefined or any value
*/

console.log(val1)

// Terniary operator -> condition ? true : false

let age = 17;
 age > 18 ? console.log("Can vote") : console.log("Can't vote")

