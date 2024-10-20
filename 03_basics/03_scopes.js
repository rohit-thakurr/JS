let a = 10;  // Block-scoped to the outer scope
const b = 20;  // Block-scoped to the outer scope
var c = 30;  // Function/Global-scoped to the outer scope

if (true) {
    let a = 20;   // Block-scoped to the if block
    var c = 60;   // Re-declares c (since var is function-scoped, this affects the outer c)
}

console.log(a);  // 10  -> value not changes in outer scope
console.log(c);  // 60  -> value changes in outer scope

/*
    let and const are block-scoped, meaning they are confined to the block in which they are declared.
    var is function-scoped or globally scoped, meaning that the re-declaration of c inside the if block overwrites
    the outer c (30), so it becomes 60 outside as well.
*/



if(true){
    let name = "rohit";   // Block-scoped
    const age = 20;       // Block-scoped
    var job = "sde";      // Function/Global-scoped
}

console.log(name, age);  //This will cause a ReferenceError because name and age are not defined in the scope where the console.log is called.
console.log(job);        // "sde"

/*
    let name = "rohit";
    let is block-scoped, meaning that the variable name is only accessible inside the block where it is defined
    (in this case, the if block). Once the block is exited, name is not accessible outside.

    const age = 20;
    const is also block-scoped, just like let. Therefore, age is only available inside the if block.
    You cannot access it outside the block.

    var job = "sde";
    var is function-scoped (or globally scoped when declared outside a function). 
    In this case, since it's not inside a function, job is treated as a global variable,
    so it is accessible both inside and outside the block.
*/