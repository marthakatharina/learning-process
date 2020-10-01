////// EXERCISES /////

// 1
// Write a function that takes an array as an argument and returns a new array containing all of the items that are in the array that was passed in but in reverse order.This function should

//     leave the original array unchanged

//     contain no loops of any kind. That includes for, for...in, for...of, while, and do...while

//     not call slice or any other method on the original array

//     not call push or concat on any array in any way

function reverseArray(array) {
    return [...array].reverse();
}
reverseArr(["a", "b", "c", "d"]);
// (4) ["d", "c", "b", "a"]

//2
// Write a function that takes two arrays as arguments and returns a new array containing all of the items in the two arrays passed to it. This function should

//     leave the original arrays unchanged

//     contain no loops of any kind. That includes for, for...in, for...of, while, or do...while

//     not call slice or any other method on the two arrays passed to it

//     not call push or concat on any array in any way

function returnNewArray(array1, array2) {
    return [...array1, ...array2];
}
returnNewArray([1, 2, 3], [4, 5, 6]);
// (6) [1, 2, 3, 4, 5, 6]

//3

// Rewrite the following function to use destructuring assignment for the three variables it creates:

//  function logInfo(city) {
//      const name = city.name;

//      const country = city.country;

//      const numPeople = city.population;

//      console.log(
//          `${name} is in ${country} and has ${numPeople} in it.`
//      );
//  }

// The three highlighted lines should be replaced with a single line.

const city = {
    name: "Berlin",
    country: "Germany",
    numPeople: 3000000,
};

const logInfo = function ({ name, country, numPeople }) {
    console.log(`${name} is in ${country} and has ${numPeople} in it.`);
};
undefined;
logInfo(city);
// VM32:8 Berlin is in Germany and has 3000000 in it.

// 4
// Pretend that it is 2002 and rewrite the following hipster Javascript so it will work in Internet Explorer 5 and Netscape 4.

//  let getNameAndCountry = ({name, country}) => [name, country];

//  let getRelocatedCity = (city1, city2={country: 'Germany'}) => {
//      let [, country] = getNameAndCountry(city2);
//      return {
//          ...city1,
//          country
//      };
//  };

let getNameAndCountry = ({ name, country }) => [name, country];

function getNameAndCountry() {
    var name = "Berlin";
    var country = "Germany";

    return [name, country];
}

getNameAndCountry();
// (2)["Berlin", "Germany"]

let getRelocatedCity = (city1, city2 = { country: "Germany" }) => {
    let [, country] = getNameAndCountry(city2);
    return {
        ...city1,
        country,
    };
};

//// TO BE CORRECTED ///

function getRelocatedCity(city1) {
    var city2 = {
        country: "Germany",
    };

    function getNameAndCountry(city2) {
        var city1 = [];
        for (var i = 0; i < city1.length; i++);
        if (city1[i] === city2.country) {
            return city1[i];
        }
        return getNameAndCountry();
    }
}
