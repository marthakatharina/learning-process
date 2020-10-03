const fs = require("fs");
const { lookup } = require("dns");

const message = "Let's write our very first file with javascript";
const myPath = __dirname; // gets me the path this files is executed at
// console.log("my path has a vaule of of:", myPath);

// composing new path and witing new file:
// fs.writeFile(myPath + "/pimento.txt");

// witing a new fil the async way: //
fs.writeFile(`${myPath}/pimento.txt`, message, (err) => {
    if (err) {
        console.log("something went wrong in writeFile:", err);
    }
    console.log("write file worked fine :)");
});
console.log("I am the log after writeFile");

// witing a file the synchronous way://
const obj = {
    name: "Pimento",
    favouriteFilms: ["Batman", "Avatar", "007"],
};

// `${myPath}` - backticks
fs.writeFileSync(`${myPath}/my_new_file.json`, JSON.stringify(obj, null, 4)); // passing second arrgument null to foramt JSON, 4 is number of spaces we want

// readdir: reading the content of a specified directory //
fs.readdir(myPath, { withFileTypes: true }, (err, content) => {
    console.log("content:", content);
    // it checks if the content is a dir or file

    for (let i = 0; i < content.length; i++) {
        console.log("content name is:", content[i].name);
        console.log(content[i].name, "is a file?", content[i].isFile());
    }
    console.log("readdir is done running!");
});
console.log("this console log came after fs.readdir");

// readdirSync: reading the content of a specified dir syncronously //
const myDir = fs.readdirSync(myPath, { withFileTypes: true });
console.log("readdirSync has this value:", myDir);
console.log("I come after readdirSync");
console.log(myDir[0].name, "is this a directory?", myDir[0].isDirectory());
console.log(myDir[4].name, "is this a file?", myDir[4].isFile());

// stat to get info about files and dirs //
fs.stat(`${myPath}/pimento.txt`, (err, data) => {
    if (err) {
        console.log("error in stat:", err);
    }
    console.log("stats for", `${myPath}/pimento.txt:`, data);
});

// statSync //
const myStat = fs.statSync(myDir[1].name); // [1] is the position of the index.js file in the directory of Marle

// readFile: reading file content //
fs.readFile(`${__dirname}/secret.js`, "utf8", (err, fileContent) => {
    if (err) {
        console.log("error in readFile:", err);
    }
    console.log("fileContent:", fileContent);
});

// readfileSync: //
const myFile = fs.readFileSync(`${myPath}/index.js`, "utf8"); // reads and shows everything what was done so far
console.log("myFile:", myFile);

/// OBJECT NOTATION ///

// let obj = {};
// obj.prop = 1;
// obj.city = "Berlin";
// obj.isHappy = false;
// console.log(obj);

// let obj = {};
// var x = "fullName";
// var name = "marta wlusek";
// obj[x] = name;
// obj["home address"] = "whatever";
// console.log(obj);

// let obj = {};
// const colorArr = ["white", "blue", "red"];
// // for loop
// for (let i = 0; i < colorArr.length; i++) {
//     obj[colorArr[i]] = [i] / s;
//     // or obj[i] = colorArr[i];
// }
// console.log(obj);
