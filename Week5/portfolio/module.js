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

/// creating new module in node async way (fs.readdir) ///

// function generateHtml(response) {
//     let myHtml = "";
//     console.log("i'm going to return some html");
//     fs.readdir(`${__dirname}/projects`, (err, files) => {
//         if (err) {
//             console.log("error: ", err);
//         }

//         files.forEach((arg) => {
//             myHtml += "<ul><li><a href=" / `${arg}` / ">${arg}</a></li><ul>";
//         });
//         response.end(myHtml);
//     });
// }
// module.exports.generateHtml = generateHtml;
// console.log("module.exports:", module.exports);

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
