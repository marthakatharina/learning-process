const chalk = require("chalk");
// console.log(chalk.red("this text is red"));
// console.log(chalk.green("this text is green"));
const http = require("http");
const qs = require("querystring");

const server = http.createServer((req, res) => {
    req.on("error", (err) => console.log("Error in request", err));
    res.on("error", (err) => console.log("Error in response", err));

    console.log("req.method: ", req.method);

    if (req.method === "GET") {
        // send some html as a response!
        res.write(`
            <!doctype html>
            <html>
            <title>Colors</title>
            <form method="POST">
            <input type="text" name="usertext">
            <select name="usercolor">
                <option value="red">red</option>
                <option value="blue">blue</option>
                <option value="green">green</option>
                <option value="yellow">yellow</option>
                <option value="gray">gray</option>
                <option value="magenta">magenta</option>
                <option value="cyan">cyan</option>
            </select>
            <button type="submit">Go</button>
            </form>
            <a href="/" style="color:magenta">it is better to have loved and lost than never to have loved at all</a>
            </html>
        `);
        // res.setHeader("content-type", "text/html");
        res.statusCode = 200;
        res.end();
    }

    if (req.method === "POST") {
        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {
            console.log("body: ", body);
            console.log("qs.parse(body): ", qs.parse(body));
            const userText = qs.parse(body).usertext;
            const userColor = qs.parse(body).usercolor;
            res.setHeader("content-type", "text/html");
            res.statusCode = 200;
            res.write(`
                <p><a href="/" style="color: ${userColor}">Hello ${userText}</a></p>
            `);
            res.end();
        });
    }
});

server.listen(8080, () => console.log(chalk.yellow("Server up and running")));
