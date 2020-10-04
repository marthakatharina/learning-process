const fs = require("fs");

const fullPath = __dirname;

// function logSizes(path) {
//     fs.readdir(path, { withFileTypes: true }, (err, content) => {
//         // console.log('content:', content);
//         if (err) {
//             console.log("something went wrong in writeFileTypes:", err);
//         }

//         for (let i = 0; i < content.length; i++) {
//             console.log("content name is:", content[i].name);
//             if (content[i].isFile()) {
//                 fs.stat(`${path}/${content[i].name}`, (err, data) => {
//                     if (err) {
//                         console.log("error in stat:", err);
//                     }
//                     console.log(
//                         "stats for",
//                         `${path}/${content[i].name}:`,
//                         data.size
//                     );
//                 });
//             } else {
//                 logSizes(`${path}/${content[i].name}`);
//             }
//         }
//     });
// }

// logSizes(fullPath);

function mapSizes(path) {
    const myDir = fs.readdirSync(path, { withFileTypes: true });
    console.log("readdirSync has this value:", myDir);
    let obj = {};
    for (var i = 0; i < myDir.length; i++) {
        console.log("name of the property is:", myDir[i].name);
        if (myDir[i].isFile()) {
            obj[myDir[i].name] = myDir[i].size;
            const myStat = fs.statSync(`${path}/${myDir[i].name}`);
            console.log(
                `myStat for ${path}/${myDir[i].name} value is:`,
                myStat
            );
        } else if (myDir[i].isDirectory()) {
            obj[myDir[i].name] = mapSizes(`${path}/${myDir[i].name}`);
        } else {
            return obj;
        }
    }
}

mapSizes(fullPath);

let newPath = `${fullPath}/files`;
mapSizes(newPath);

var newFile = JSON.stringify(newPath, null, 4);

fs.writeFileSync(`${fullPath}/files/files.json`, newFile);
