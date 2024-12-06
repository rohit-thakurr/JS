/*
    The switch statement in JavaScript is used to execute different blocks of code based on the value of a given expression.
    It is typically used when you have multiple conditions to check against a single variable or expression, 
    and you want to make the code cleaner and easier to read than using multiple if...else if statements.

    switch (expression) {
        case value1:
            Block of code to execute if expression === value1
            break;
        case value2:
            Block of code to execute if expression === value2
            break;
            More cases can be added
        default:
            Block of code to execute if none of the cases match
    }

    When a case matches, the code execution does not stop at that case but continues through all subsequent cases,
    including the default, until the end of the switch block 
    To stop further execution we use break keyword.

*/

const month = 3;

switch (month) {
    case 1:
      console.log("January");
      break; // Stops here if month === 1
    case 3:
      console.log("March");
      break; // Stops here if month === 3
    case 6:
      console.log("June");
      break; // Stops here if month === 6
    default:
      console.log("Not a month in the given cases");
      // Executes if no case matches
  }


// We can even used the switch with true, and different conditions are checked by comparing age with the case expressions.
let age = 20;
let access;

switch (true) {
  case (age >= 18 && age < 21):
    access = "Limited access";
    break;
  case (age >= 21 && age < 30):
    access = "Full access";
    break;
  case (age >= 30):
    access = "Access with benefits";
    break;
  default:
    access = "No access";
}

console.log(access);  // Output: "Full access"