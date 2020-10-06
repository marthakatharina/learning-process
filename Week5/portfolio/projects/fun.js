/// creating new module in node ///

const fs = require("fs");

function generateHtml() {
    console.log("i'm going to return some html");
} // this fn bilds a string tag of html
console.log("module.exports:", module.exports);
module.exports.generateHtml = generateHtml;
console.log("module.exports:", module.exports);
// module.exports.marta = "generateHtml" // we can export whatever we like here
// refer to index.js const fun = require("./fun.js");
// console.log("fun", fun);
// fun.generateHtml(); // or const {generateHtml} = require(".fun.js");

// or

// fs.readdir
// or
// fs.readdirSync - easier
