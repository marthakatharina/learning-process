/* 

    Write a function that takes any number of numbers as arguments and returns the sum of those numbers.

    sum(5, 10); //15

    sum(5, 10, 15); //30;

    sum(5, 10, 15, 100, 200); //330

    Write a function that takes another function as an argument. It should wait 1.5 seconds and 
    then run the function that was passed in.

     waitThenRun(function() {
         console.log('Hello!');
         waitThenRun(function() {
             console.log('Goodbye!');
         }); // logs 'Goodbye!' 1.5 seconds later
     }); // logs 'Hello!' 1.5 seconds later

    Write a function that expects a number as an argument. 
    If the value that is passed in is less than 0, equal to 0, or not a number, 
    the function should return the string 'ERROR'. If the number that is passed in is greater than or equal
     to 1000000 it should simply return the number. Otherwise it should multiply the number by 10 however 
     many times it takes to get a number that is greater than or equal to 1000000 and return that.
*/


//1
// argument keywords

function sum() {
    return (
        arguments[0] + arguments[1] + arguments[2] + arguments[3] + arguments[4]
    );
}

sum(5, 10, 15, 100, 200);

console.log(sum(5, 10, 15, 100, 200));

// //2
// callbacks setTimeOut

setTimeout(function () {
    console.log("Hello!");
}, 1000);
setTimeout(function () {
    console.log("Goodbye!");
}, 1500);

// //3
// if, else, if else --> recursion

function recursion(num) {
    if (num <= 0) {
        return "ERROR";
    } else if (num >= 1000000) {
        return num;
    } else if (num * 10) {
        return num * num;
    } else {
        return recursion(num >= 1000000);
    }
}
