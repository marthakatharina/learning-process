const http = require("http");
const fs = require("fs"); // fs - file system
const path = require("path");
const moduleScript = require("./module.js");
console.log("created module", moduleScript);

// const { generateHtml } = require(".fun.js");
// // console.log('fun: ',fun);
// // fun.generateHtml();
// console.log("generateHtml: ", generateHtml);
// generateHtml(); // or another way: fun.generateHtml();

http.createServer((req, res) => {
    // const myReadStream = fs.createReadStream(
    //     __dirname + "/projects/Connect4/style.css"
    // );
    // console.log("__dirname", __dirname); // __dirname indicates where I currently am
    // myReadStream.pipe(res);
    if (req.url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.statusCode = 200;
        res.end("<h1>Portfolio</h1>" + moduleScript.generateHtml());
    }

    if (req.method !== "GET") {
        res.statusCode = 405; // method not allowed
        return res.end(); //return makes that any code after it will not run
    }
    // console.log("req.url:", req.url);
    const filePath = path.posix.normalize(__dirname + "/projects" + req.url);
    console.log("filePath:", filePath); // shows the path

    //traversal attack or dot dot slash (../):
    // console.log("/users/martawlusek/.../.../.../wp-config");
    // console.log(
    //     path.normalize("/users/martawlusek/.../.../.../wp-config"); // nomalize removes dots ...and goes directly to wp-config
    if (!filePath.startsWith(`${__dirname}/projects/`)) {
        // other way __dirname + "/projects" for `${__dirname}/projects/`
        // must start with what it starts with
        res.statusCode = 403; // forbiden
        console.log("INTRUDER ALERT!");
        return res.end();
    }
    console.log("Now is the time to try and serve something");

    fs.stat(filePath, (err, stats) => {
        // to check if the chosen dir exists
        if (err) {
            res.statusCode = 404; // nothing found
            console.log("err in fs.stat:", err);
            return res.end("404");
        }
        // console.log("do something...", stats);

        if (stats.isFile()) {
            // console.log("then serve the file", filePath);
            console.log("path.extname(filePath)", path.extname(filePath)); // path - is a fs module and shows extetion such us .html, .js, .css, .json, jpg and so on

            var file = {
                ".html": "text/html",
                ".css": "text/css",
                ".js": "text/javascript",
                ".json": "application/json",
                ".gif": "image/gif",
                ".jpg": "image/jpeg",
                ".png": "image/png",
                ".svg": "image/svg+xml",
            };
            // console: obj[".css"] // "text/css"

            res.setHeader("Content-Type", file[path.extname(filePath)]);
            console.log("path.extname(filePath): ", path.extname(filePath));
            // res.setHeader("Content-Type", file[path.extname(filePath)]); sets adequate header:
            // res.setHeader("Content-Type", "text/html");
            // res.setHeader("Content-Type", "text/css");
            // res.setHeader("Content-Type", "application/json");
            // res.setHeader("Content-Type", "image/gif");
            // res.setHeader("Content-Type", "image/jpeg");
            // res.setHeader("Content-Type", "image/png");
            // res.setHeader("Content-Type", "image/svg+xml");

            const readStreamHtml = fs.createReadStream(filePath);
            readStreamHtml.pipe(res);
            readStreamHtml.on("error", (err) => {
                console.log("err in readStreamHtml", err);
                res.statusCode = 500;
                res.end();
            });
        } else {
            console.log("it's a directory");
            if (req.url.endsWith("/")) {
                console.log("filePath:", filePath);
                if (fs.existsSync(`${filePath}/index.html`)) {
                    console.log("contains index.html");
                    const readStreamHtml = fs.createReadStream(
                        `${filePath}/index.html`
                    );
                    res.setHeader("Content-Type", "text/html");
                    readStreamHtml.pipe(res);
                    readStreamHtml.on("error", (err) => {
                        console.log("err in readStreamHtml", err);
                        res.statusCode = 500;
                        res.end();
                    });
                } else {
                    console.log("contains no index.html");
                    res.statusCode = 404;
                    res.end("404 - NOT FOUND");
                }
            } else {
                // if users use no slash at the end it redirects them to a url that has a slash at the end:
                res.setHeader("Location", req.url + "/");
                res.statusCode = 302;
                res.end();
            }
        }
    });
}).listen(8080, () => console.log("Portfolio up and running"));
