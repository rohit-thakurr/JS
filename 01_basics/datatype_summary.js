
/*
    Types of DataTypes -> Primitive & NonPrimitive
    Basically datatypes are classified in these two types based on how this value is saved & access in memory
    (So they are basically classified based on Call by Value & Call by Reference of nature)

    Primitive
    When we copy these data types basically we get the copied value not reference
    let x = 10;
    let y = x;    y gets a copy of the value of x
    x = 20;       Changing x doesn't affect y
    So y only conatins the value of a not it's reference

    7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

    Non-Primitive (Refernce Type)
    When we copy these data types basically we copied the reference of these copied values
    let obj1 = { name: "John" }
    let obj2 = obj1;     obj2 holds a reference to obj1
    obj1.name = "Jane";  Changing obj1 will affect obj2, as they point to the same object

    Array, Objects, Functions
*/

/*
    Statically typed VS  Dynamically typed

    Statically Typed
    A statically typed language (like Java, C++, or TypeScript) 
    would require you to declare the type of the variable at compile time,
    and that type cannot change without explicit casting.

    int x;          x is explicitly declared as an integer type at compile time
    x = 5;          Valid
    x = "Hello";    Invalid! This will cause a compile-time error because "Hello" is not an integer

    Dynamically typed

    let x;          x is declared, but no type is specified
    x = 5;          Now, x is a number
    x = "Hi";       Now, x is a string (JavaScript allows this flexibility)

*/

const id = Symbol("123")
const newId = Symbol("123")
console.log(id == newId)    //false

/*
    It represents a unique and immutable value, primarily used to create unique identifiers
    for object properties.

    Each Symbol value is unique and cannot be replicated. 
    Even if you create two Symbols with the same description, they will be different.
    This uniqueness makes Symbols useful for creating private or hidden properties in objects,
    that won't accidentally conflict with other property names.

    Once a Symbol is created, its value cannot be changed (Immutable)
    They are often used to make keys for objects so that two keys of same object don't have same name
*/

console.table([ id, newId])

