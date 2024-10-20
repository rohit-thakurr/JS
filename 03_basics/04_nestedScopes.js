
/*
    JavaScript checks for variable declarations in the current scope first,
    then moves up to the parent scopes until it finds the variable or reaches the global scope.
    It does not access children's scopes when looking for variables in this chain.

    A ReferenceError in JavaScript is an error that occurs when you try to access
    a variable that is not defined in the current scope. 
    This typically happens when you attempt to use a variable that hasn't been declared or
    is out of reach due to scope restrictions.
*/

let userName = "realName"
function one(){

    let userName = "rohit"
    function two(){
        const website = "youTube"
        userName = "thakur"        // It changes the reference of the nearest scoped `userName`, otherwise creates a variable using var
        newUser = "Sunil"          
        // It will creates a new global scoped variable using var as it doesn't find any variable in this scoped or in any of it's parents.
        console.log(userName)
    }

    two();
    //console.log(website)
   //It will give reference error because you are trying to access a variable which is not scoped to one func or it's parent func
   
   console.log(userName)
}

one();
console.log(userName)
console.log(newUser)