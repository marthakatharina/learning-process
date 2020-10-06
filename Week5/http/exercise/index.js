//part1

const http = require("http");

http.createServer((req, res) => {
    req.on("error", (err) => console.log("err in request:", err));
    res.on("error", (err) => console.log("err in response:", err));
    /// event emitters, it listens for errors

    console.log("request method:", req.method);
    console.log("request url:", req.url);
    console.log("request headers:", req.headers);

    if (req.method === "GET" || req.method === "HEAD") {
        res.setHeader("content-type", "text/html");
        res.statusCode = 200;
        res.end();

        if (req.method === "HEAD") {
            res.end();
        } else if (req.method === "GET") {
            res.end(`<!doctype html>
<html>
<title>Hello World!</title>
<p>Hello World!</p>
</html>`);
        }
    } else if (req.method === "POST") {
        res.setHeader("Location", "/");
        res.statusCode = 302;
        res.end();
    } else if (
        req.method !== "GET" ||
        req.method !== "HEAD" ||
        req.method !== "POST"
    ) {
        res.statusCode = 302;
        res.end();
    }

    var body = " ";
    req.on("data", function (chunk) {
        body += chunk;
    }).on("end", function () {
        console.log(body); //logs the entire request body
    });
}).listen(8080, () => console.log("server is listening..."));
