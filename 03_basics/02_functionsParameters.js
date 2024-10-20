/*
    The Rest operator in JavaScript (...) allows you to represent an indefinite number of arguments as an array.
    It is useful when you want a function to accept a variable number of arguments
    or when you want to capture remaining elements in an array.
*/

function calculateTotalItems(...items){            // Rest Operator as a parameter in function
    return items;
}

// Rest Operator in a function used when you can't specify exact number of parameters
console.log( calculateTotalItems(20,40,10))

/*
    nums = [1,2,3,4,5]
    ...nums = 1,2,3,4,5

    so if i want to pass func(1,2,3,4,5) => i can even do func(...nums)
    & all these values can be wrraped inside an array nums = [1,2,3,4,5]

    Differences Between Rest and Spread:
    Rest operator (...): Gathers multiple elements (arguments or array elements) into an array or object.
    Spread operator (...): Spreads elements from an array or object into individual elements
*/

function myFunc(var1, var2, ...items){
    return items;
}

/*
    here 1,2,3,4,5  => var1, var2, ...items
    so var1 = 1, var2 = 2
    & items array = [3,4,5]
*/
console.log(myFunc(1,2,3,4,5))       // [3,4,5] => return value