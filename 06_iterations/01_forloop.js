
// for loop
for( let index = 0; index < 3; index++){
    console.log(index);
}

// console.log(index).    -> can't access index outside block scope of for

// Nested Loops

for( let index = 0; index < 3; index++){
    for( let index = 0 ; index < 4; index++){
        // Can use index again in this inner loop scope
        console.log(index)
    }
}

// break and continue

for( let i=1; i<10 ; i++){
    if( i == 5){
        console.log("5 detected");
        break;
    }

    console.log("Code Executed")
}

/*
    The break keyword in JavaScript is designed to exit the nearest enclosing loop
    (e.g., for, while, or do...while) immediately
*/


for( let i=1; i<10 ; i++){
    if( i == 5){
        console.log("5 detected");
        continue;
    }

    console.log(`Code Executed ${i}`)
}

/*
    The continue statement in JavaScript is used in loops to skip the current iteration and
    move directly to the next one. It does not terminate the loop entirely (unlike break),
    but instead stops the rest of the code for the current iteration and jumps to the next iteration of the loop.
*/