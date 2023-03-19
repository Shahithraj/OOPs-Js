// In Node - non-strict mode

// console.log(this) // --> {} - Empty object


// function showValue() {
//     console.log(this) // global oject
// }

// showValue()

// let obj = {
//     name:"shahith",
//     getVal: function () {
//         console.log(this) // object itself
//     }
// }

// obj.getVal();

// let obj2 = {
//     name:"raj",
//     fn1: function () {
//         function fn2{
//             console.log(this) // global object
//         }
//         fn2()
//     }
// }

// obj2.fn1()

// Strict Mode

"use strict"

console.log(this) // --> {} - Empty object


function showValue() {
    console.log(this) // undefined
}

showValue()

let obj = {
    name:"shahith",
    getVal: function () {
        console.log(this) // object itself
    }
}

obj.getVal();

let obj2 = {
    name:"raj",
    fn1: function () {
        function fn2(){
            console.log(this) // undefined
        }
        fn2()
    }
}

obj2.fn1()
