// Stack(Primitive) & Heap(Non primitive)

// If variable is stored in  stack memory than we get a copy of that variable.
// If memory is defined in heap than we get reference of that memory & any change in reference change the original value.


// Stack Memory

let programmer = "Rohit"
let newProgrammer = programmer      // Copied value of programmer variable value stored in stack memory
                                    // to new newProgrammer variable

newProgrammer = "Sunil"             // Value of newProgrammer variable changes in stack memory
console.table([programmer,newProgrammer])

// Heap Memory

let programmerDetail = {
    name : "Rohit",
    profession : "Coder"
}                                           // Non primitive data so it will be stored in heap

/*
    Basically variable programmerDetail gets a memory location in stack memory which stored a reference of 
    memory location in heap where actual 
    object {
            name : "Rohit",
            profession : "Coder"
        }                      
*/

let newProgrammerDetail = programmerDetail;     

/*
    Now newProgrammerDetail variable gets a memory location in stack memory which contains the same reference as
    memory location in programmerDetail, basically here reference is copied instead of value
*/

newProgrammerDetail.name = "Sunil"     // It changes the value of every variable pointing to same memeory location in heap

console.table([programmerDetail , newProgrammerDetail])



