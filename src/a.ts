// const x: number =1;
// console.log(x)

// function greet(firstname: string){
//     console.log("hello " + firstname);
// }

// greet("harkirat")

// function sum(a:number, b:number){
//     return a+b
// }

// const value = sum(1,2);
// console.log(value)



// function isLegal(age:number){
//     if(age>18){
//         return true
//     } else{
//         return false
//     }
// }

// let y = isLegal(15)
// console.log(y)

// function runAfter1s(fn: ()=> void){
//     setTimeout(fn, 1000);
// }

// runAfter1s(function () {
//     console.log("hi there")
// })

interface User {
    firstname : string,
    lastname: string,
    age: number
}



function isLegal(user:User){
    if(user.age>18){
        return true
    } else{
        return false
    }
}


function greet(user:User){
    console.log("hello "+ user.firstname)
}

let p = isLegal({
    firstname:"harkirat",
    lastname:"singh",
    age:20
})

console.log(p)