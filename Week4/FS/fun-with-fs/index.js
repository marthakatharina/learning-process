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
            // console.log("content name is:", content[i].name);
            if (path[content[i]] == [i].name) {
                fs.stat(`${path}/[i].name`, (err, data) => {
                    if (err) {
                        console.log("error in stat:", err);
                    }
                    console.log("stats for", `${path}/[i].name:`, data.size);
                });
            } else {
                logSizes(`${path}/[i].name`);
            }
        }
    });
}

logSizes(fullPath);
