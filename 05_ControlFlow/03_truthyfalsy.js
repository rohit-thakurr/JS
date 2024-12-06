const userName = "rohit@gmail.com"

if( userName ){
    console.log("Truthy value")
}else{
    console.log("Flasy value")
}

// Basically they considered userName = "rohit@gmail.com" as truthy value

/*
    Falsy Values
        false, 0 , -0,  0n (BigInt zero), "" , null , undefined , NaN

    Other than these everything are truthy values

    Some Confusing Thruthy values
        []              -> empty array
        "0"             -> zero in string (only empty string considered falsy in js)
        'false'         -> false in string
        " "             -> even space in string considered non empty as it size is 1
        function() {}   -> when you create a function, the function is treated as an object, 
                        and its reference is stored in the stack (if assigned to a variable),
                        while the actual function object is created in the heap.
*/


if( " " ){
    console.log("Executed because it's not a empty string but have space in string")
}

/*
    Why [] &  {} considered truthy values

    let a = [] -> Now here a stored the address of empty list stored in heap
                  Basically a is not empty & stored the address of the memory location

    if ( a ) {
        console.log("It's executed because a is not empty & stored memory location value")
    }

    What if i do if( [] ) ?
        Here [] empty array creates a memory location in heap & [] represent the reference to that memory location
        It didn't stored in any variable in stack but it's reference exist which we are using in if statement
        Now when we does if( a ) , what actually we are doing is if( reference of address of heap memory)
        Similary here if ( [] ) does the same
        As a = [] so if( a ) is actually if( [] )
*/


// So How we check whether array & objects are empty or not as [] & {} are treated as truthy values

let email = [];
let details = {};

if( email.length === 0 ){
    console.log("Now i can find whether [] is empty or not based on condition")
}

if( Object.keys(details).length === 0){
    console.log(" Object.keys(details) returns array of keys whose length tell us whether object is empty or not")
}