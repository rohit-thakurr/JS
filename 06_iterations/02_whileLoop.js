/*
    Structure of while loop

    Initialization
    while( condition to run loop ){
        // Code Execution
        increment/decrement
    }

    All stuffs are same as for loop just different in it's writing pattern
*/

const heros = ["Superman", "Batman", "Spiderman"]
let index = 0;                          //  Initialization
while( index < heros.length ){          // Condition
    console.log( heros[index] )         // Code
    index++;                            // increment/decrement
}