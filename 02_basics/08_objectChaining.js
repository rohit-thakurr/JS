
const regularUser = {
    fullName : {
        userFullName : {
            firstName : "Rohit"
        }
    }
}

console.log( regularUser["fullName"]["userFullName"]?.firstName)

const obj1 = { 1: "a" , 2: "b"}
const obj2 = { 3: "c" , 4: "d"}
const obj3 = { 5: "e" , 6: "f"}

const nestedObj = {obj1, obj2, obj3}   // Creates a nested object
const newObj = Object.assign({} , obj1, obj2 , obj3)

console.log(nestedObj)
console.log(newObj)

/*
    The Object.assign() method is used to copy the properties of multiple source objects into a target object.

    In this case, you are merging obj1, obj2, and obj3 into a new object, newObj. 
    The first argument ({}) is the target object, 
    which starts as an empty object and gets updated with the properties from obj1, obj2, and obj3.
    Any properties with the same key will be overwritten by the last object's value.
*/

newObj["1"] = 100;
nestedObj.obj1["2"] = 150

/*
    In nestedObj where the properties obj1, obj2, and obj3 refer to the original objects.
    Essentially, it's a shallow reference to obj1, obj2, and obj3.
    Any changes made to obj1, obj2, or obj3 will reflect in nestedObj because it's pointing to the same objects.

    newObj is an object created by copying the properties from obj1, obj2, and obj3.
    Object.assign performs a shallow copy, meaning the values of properties from obj1, obj2, and obj3 
    are copied into newObj.
    Changes to obj1, obj2, or obj3 after the copy will not affect newObj.
*/

console.log(obj1)

// Using Spread Operator
const spreadObj = {...obj2, ...obj3}          // Shallow Copying
obj2["3"] = 404                               // Not change value in spreadObj due to shallow copying
console.log(spreadObj)

/*
    When you use the spread operator (...) to create spreadObj, 
    it copies the properties from obj2 and obj3 into a new object. 
    This is a shallow copy, meaning the values (in this case, strings) are copied by value, not by reference. 
    Once the object is created, it is independent of the original obj2 and obj3.
*/