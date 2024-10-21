



const obj = {
    userName : "Rohit",
    price : 100,

    obj2 : {
        userName : "Default",
        welcomeNow : function(){
            console.log(`${this.userName} , welcome`)
        }
    },

    welcome: function(){

        const newObj = {
            userName : "Thakur",
            // notWelcome : function(){
            //     console.log(`${this.userName} , Welcome `)  
            // }
        }
        console.log(`${this.userName} , Welcome `)       // here it will use obj.userName
        console.log(this)   // here we are trying to access this welcome function using obj therefore this => obj 

        //newObj.notWelcome();
    }


    /*
        We use this.userName not userName otherwise it look for variable username not any property.
        When we use this.anyProperty it will try to find property in it's current context or current object &
        if it's not find in that than it will try to find in it's parent contexts.
        The current context in an object where this is used refers to the object itself

        if we tries to access obj.anyProperty than this refers to obj in it
        this when we use obj.welcome refers to { userName: 'Rohit', price: 100, welcome: [Function: welcome] } 
        this is the current context meaning.
    */
}

// obj.welcome();
// obj.userName = "NoBody"
// obj.welcome();

obj.obj2.welcomeNow();
/*
    when we call obj.obj2.welcomeNow(), the this keyword inside the welcomeNow function refers to obj2, not obj
    In JavaScript, the value of this is determined by how a function is called, not where it is defined. 
    When you call a method on an object (like obj.obj2.welcomeNow()), 
    this inside that method refers to the object the method is called on, which in this case is obj2.

    this points to the object from which the method is called, basically the nearest object.
*/

console.log(this)       // return {} empty object
/*
    When you execute JavaScript in a browser environment, this refers to the top level object that is global object, 
    which is the window object.
    In Node.js, each JavaScript file is treated as a separate module. At the top level of a module,
    this refers to the module itself, which is an empty object {}.
*/

