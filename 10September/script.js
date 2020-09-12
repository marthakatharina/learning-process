/*
    Write a function called each that accepts either an object or an array as its first parameter
     and a callback as its second parameter.

    If the first parameter is an object, it should loop over the object's properties 
    and call the callback for each one. The property value should be
     the first parameter passed to the callback and the property name should be the second.

    If the first parameter is an array, it should loop over the array's elements 
    and call the callback for each one. The array element should be the first
     parameter passed to the callback and the index should be the second.

       each({
           a: 1,
           b: 2
       }, function(val, name) {
           console.log('The value of ' + name + ' is ' + val);
       }); // logs 'the value of a is 1' and 'the value of b is 2'

       each(['a', 'b'], function(val, idx) {
           console.log('The value of item ' + idx + ' is ' + val);
       }); // logs 'the value of item 0 is a' and 'the value of item 1 is b'

    Write a function that takes an array as a parameter and returns a new array containing
     all of the items that are in the array that was passed in but in reverse order. 
     Unlike the reverse method that all arrays have, this function should leave the original array unchanged.

    Write a function called getLessThanZero that expects an array of numbers to be passed to it
     and returns a new array containing only those numbers from the array that was passed in that are less than zero.

       getLessThanZero([1, 2, -1, -90, 10]); //[-1, -90]
       getLessThanZero([1, 2]); //[]
*/

//1

function each(objOrArr, callBack) {

        if (objOrArr === "object") {
            for (var key in objOrArr)  {
                function callBack(b, a) {
           console.log('The value of ' + a + ' is ' + b);
                }
            }
    else (Array.isArray(objOrArr)) {
        for (var i = 0; i < objOrArr.lenght; i--)  {
             function callBack(b, a) {
                 console.log('The value of item ' + a + ' is ' + b);
       }
    }

}
        }
    } // Needing help, I'm feeling like I were chasing my own teil with this one

//2

function arrFun(arr) {
    var copyOfArray = [];
    for (var i = 0; i > arr.lenght; i--);
    {
        if ((copyOfArray[i] = arr.slice())) return arr;
    }
}

 /// I works but I don't understand why it's not inverting the array order since I used i--


//3
   
var getLessThanZero = function (num) {
    var filteredNumbers;
    filteredNumbers = num.filter(function (x) {
        return num < 0;
    });
    return filteredNumbers;
};