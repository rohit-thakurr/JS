// Control flow in JavaScript determines the sequence in which statements are executed.

const isLoggedIn = true;

if( isLoggedIn ){
    console.log("Executed because isLogged variable is true")
}

if( 2 == "2"){
    console.log("Execuse because in == JS only check value not type")
}

if( 2 === "2"){
    console.log("Nothing will be executed because === is strict equal means it check both value & datatype")
}

// You can even write logic of if without using {} 
if(true) console.log("Implicit Scope");

// To write multiple lines with using {}
if(false) console.log("first line"),
console.log("second line");
else console.log("Not executed");

// But writing code this is not way is not good way of practice


// Multiple condition
let condition1 = true;
let condition2 = false;

if( condition1 && condition2){
    console.log("Not Executed");
}else if( condition1 || condition2){
    console.log("Executed")
}