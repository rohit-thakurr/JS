// 1. As soon as this file is executed global execution context is created & context stored in this keyword

let val1 = 10;
let val2 = 20;

function sum( num1 , num2){
    let total = num1 + num2;
    return total;
}

let result1 = sum( val1 , val2);
let result2 = sum( 5 , 7);

/*
    2. Then memory creation execution phase is executed and space is created for variables in js file.
       all varibles val1,val2, result1 & result2 is collected and stored it with undefined value.
       function sum is hoisted at the top of current context.

    3  The execution phase is executed & Code statements are executed and variable assignments happen.
        Functions are called, and their own execution contexts are created
        (i.e., when a function is invoked, a new execution context for that function is created).
        
        val1 = 10, val2 = 20 ( these two variables are stored in the created memory in memory execution phase)
        There will nothing will be happen in sum function declaration becasue there is nothing to execute.

    3.1 When you reach let result1 = sum( a , b), this sum creates it's own execution context &
        repeat the memory creation execution, execution & destruction phase in the new funtional context.
        Everytime a function is executed a new context is created.

        3.1.1 Then memory creation execution phase is executed in functional context and space is created
              for variables num1, num2 & total and assigned with undefined value.
        3.1.2 The execution phase is executed & Code statements are executed and variable assignments happen
              of variables num1 = val1 , num 2 = val2 & total = num1 + num2
              Return statement return total variable value in parent execution context.
        3.1.3 Once you return value in parent execution context, this functional execution context get's deleted.

    Same thing will happen for result2 and value coming from functional execution context stored it in.
    After all the code in the file is executed and there are no pending operations
    (like active event listeners, asynchronous tasks, or timers), the program ends.
*/