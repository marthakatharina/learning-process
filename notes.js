/*
var i = 10;
var i;
i = 10; // assain value
(i = 20), // reassain value
    console.log(i % 4); // expression - values and operators

var x = {
    age: 50, 
    color: "pink",
    weels: 4,
    isCar: true,
}; // object // age, color, wheels is called key

var a = [10, 20, 30]; //array

console.log(x["color"]); //accessing object's value --> pink
console.log(a[0]); //accessing array's value --> 10
console.log(fn()); //accessing function's value
console.log(typeof x); //tells if value is object, function or array(object)

var = true;
if (x) {
    console.log('yes');
} else {
    console.log('no');
} // {} two blocks

// ! --> not, !! --> not not operator
// && --> and operator || --> or
var = null;
var b = 10;
console.log(a && b); // picks one to say if it's true or not
console.log(a || b); // picks one to say if it's true or not

// b = b + 5 or b += b --> 15 incrementing b++ --> b = b + 1 --> 11
var i;
while (i < 5) {
    i++;
    console.log(i); // --> 12345 nevesr stops
} // for looping for arrays [0,1,2,3]

// exercise
//1
function logType(arg) {
    if typeof arg == "string" {
        console.log("string");
    }


}
logType(10);
logType(null)

//2
var a = {
    Berlin: "Germany",
    Paris: "France",
    "New York": "USA" // inverting properties and values

};
var b = {};
    for (var key in a) {
    console.log(key, a[key], a.key);
}
//for loop
*/

//// LOCAL SCOPE ///
// function hello() {
//     var name = "Marta";
//     console.log("hello " + name);
// }
// hello();

//// HOISTING ////

// var a = 100;
// var b = 200;

// var a, b;
// a = 100;
// b = 200;

// a = 100;
// b = 200;
// var a, b; --> this is hoisting - pulling up to top

//// FUNCTION DECLERATION //// --> this type of function can be hoisted (pulled up)

// function sguare(num) {
//     return num * num;
// }

// function muss alwyas return a value

// //// FUNCTION EXPRESSION ////
// var square = function(num) {
//     return num * num;
// };

// console.log(square(2));

//// CALLBACKS ////
// setTimeout

////// IIFE ////
// (function() {

// // // code in here is protected
// it is to make sure to alsways write in local scope

// })();

//// ARGUMENTS /////

// function sayHi(name) {
//     console.log("hi " + name);
// }

// sayHi("Pimento");

// function sayHi() {
//     console.log(arguments); --> tells all arguments passed to console.log
//     console.log(arguments.length); --> tell number of arguments --> 7
//     console.log(argument[3]); --> Alister

//   return argument[3];
// }

// sayHi("Pimento", "Andrea", "Pete", "Alister", "Merle", "Ivana", "David");


//// RECURSION ////

// function countdown(num) {
//     console.log(num);

//     if (num <= 0) {
//         return;
//     } else {
//         countdown (num - 1);
//     }
// } 
// countdown(5); --> looping until reaches 0

//loops are for objects, recusions are for functions

// Exercise
//1
// argument keywords

// //2
// callbacks setTimeOut

// waitThenRun(function() {

// }

// //3
// if, else, if else --> recursion 

///// EXTENTIONS ////
// colorzilla 
// colorpicker
// code runner 
// bracket pair colorizer 