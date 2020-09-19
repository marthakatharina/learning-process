//// Arrays ////

var colors = ["red". "green", "blue"];
var colors = ["red". "green", "blue"];
var colors = ["red". "green", "blue", "yellow", "pink"]; //// shift alt down arrow key to copy 

console.log(colors[colors.lenght -1]); /// access last thinkg in array

/// cainiuse.com to check if we can use js in particular browsers 

colors.push("emerald");
console.log(colors); /// adds extra item to the end of array

colors.pop(); 
console.log(colors); /// removes the last item form array

var removedColor = color.pop();
console.log("removedColor"); // to see removed thing

/// colors.unshift - adds extra to the begining
/// colors.shift - removes first one 

/// SPLICE  ---> selects range eg. 1-3 to be removed
////SLICE  see SPICE notes ---> usues alwyas 2 arg to indicate  and  ends one before the last arg 1-4 ends on 3

var colors = ["red", "green", "blue", "yellow", "pink"];

var longColors = colors.filter(function(x) {
    return x.lenght > 4 // selects colors that have less letters than 4
} 
/// filter creates new array


//// Objects ////

/// edabit.com - tutorials 

/// objects define what it is 

/// {} 

var person = {
    name: "Pete",
    age: 37,
    city: "Berlin", 
} // name, age , city are keys

console.log(person.age);

person.city = "New York" /// chages the key city in var person 

var person = {
    name: "Pete",
    age: 37,
    city: "Berlin", 
    address: {
        street: Brlinerstr,
        postcode: 121324
    }, /// nested object
    children: [1, 2] // 1,2 are names
}
console.log("children" in person) // returns true

// delete removes keys from objects

console.log(person.address.street); /// returns Berlinerstr

person.children.push(3); // pushes 3th child name

// for looping in objects we use (for key in person) //
// console.log(key, person[key]);

// exercises

//2 mutatating array to reverse order with SPLICE?

//3 filter?

//1 
// 2 parameters == arguments in fn


// callback second argument is a function callBack()
// for in loop

function each(objOrArr, callBack) {


}

console.log(['a', 'b'], function(val, idx))