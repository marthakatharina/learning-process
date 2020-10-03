const fs = require("fs");

const fullPath = __dirname;

function logSizes(path) {
    // const fullPath = __dirname;
    fs.readdir(path, { withFileTypes: true }, (err, content) => {
        // console.log('content:', content);
        if (err) {
            console.log("something went wrong in writeFileTypes:", err);
        }

        for (let i = 0; i < content.length; i++) {
            console.log("content name is:", content[i].name);
            if (content[i].name) {
                fs.stat(`${path}/${content[i].name}`, (err, data) => {
                    // if (err) {
                    //     // console.log("error in stat:", err);
                    // }
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

logSizes(fullPath);
