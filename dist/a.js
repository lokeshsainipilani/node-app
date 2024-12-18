"use strict";
// const x: number =1;
// console.log(x)
function isLegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
function greet(user) {
    console.log("hello " + user.firstname);
}
let p = isLegal({
    firstname: "harkirat",
    lastname: "singh",
    age: 20
});
console.log(p);
