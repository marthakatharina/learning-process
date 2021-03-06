const fs = require("fs");

/// creating new module in node sync way (fs.readdirSync) ///

function generateHtml() {
    const folder = fs.readdirSync(`${__dirname}/projects`);
    let myHtml = " ";
    folder.forEach((arg) => {
        myHtml += `<p><a href="/${arg}/">${arg}</a></p>`;
    });
    return myHtml;
}

module.exports.generateHtml = generateHtml;

// this fn bilds a string tag of html
// console.log("module.exports:", module.exports);
// module.exports.generateHtml = generateHtml;
// console.log("module.exports:", module.exports);
// module.exports.marta = "generateHtml" // we can export whatever we like here
// refer to index.js const fun = require("./fun.js");
// console.log("fun", fun);
// fun.generateHtml(); // or const {generateHtml} = require(".fun.js");
// fs.readdir
// or
// fs.readdirSync - easier
