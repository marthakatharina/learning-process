const fs = require("fs");

// const fullPath = `${__dirname}/files`;

function logSizes(path) {
    fs.readdir(path, { withFileTypes: true }, (err, content) => {
        // console.log('content:', content);
        if (err) {
            console.log("something went wrong in writeFileTypes:", err);
        }

        for (let i = 0; i < content.length; i++) {
            console.log("content name is:", content[i].name);
            if (content[i].isFile()) {
                fs.stat(`${path}/${content[i].name}`, (err, data) => {
                    if (err) {
                        console.log("error in stat:", err);
                    }
                    console.log(
                        "stats for",
                        `${path}/${content[i].name}:`,
                        data.size
                    );
                });
            } else {
                logSizes(`${path}/${content[i].name}`);
            }
        }
    });
}

// function mapSizes(path) {
//     const myDir = fs.readdirSync(path, { withFileTypes: true });
//     console.log("readdirSync has this value:", myDir);
//     let obj = {};
//     for (var i = 0; i < myDir.length; i++) {
//         console.log("name of the property is:", myDir[i].name);
//         if (myDir[i].isFile()) {
//             obj[myDir[i].name] = myDir[i].size;
//             const myStat = fs.statSync(`${path}/${myDir[i].name}`);
//             console.log(
//                 `myStat for ${path}/${myDir[i].name} value is:`,
//                 myStat
//             );
//         } else if (myDir[i].isDirectory()) {
//             obj[myDir[i].name] = mapSizes(`${path}/${myDir[i].name}`);
//         } else {
//             return obj;
//         }
//     }
// }

// David's way:

function mapSizes(path) {
    const files = fs.readdirSync(path, { withFileTypes: true });
    const obj = {};
    for (let i = 0; i < files.length; i++) {
        const nextPath = `${path}/${files[i].name}`;
        if (files[i].isDirectory()) {
            obj[files[i].name] = mapSizes(nextPath);
        }
        if (files[i].isFile()) {
            const { size } = fs.statSync(nextPath);
            obj[files[i].name] = size;
        }
    }
    return obj;
}

logSizes(`${__dirname}/files`);

fs.writeFileSync(
    "files.json",
    JSON.stringify(mapSizes(`${__dirname}/files`), null, 4)
);
