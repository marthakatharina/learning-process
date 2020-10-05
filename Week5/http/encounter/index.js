const http = require("http"); // node setup

const server = http.createServer((request, response) => {
    // this is a callback function (if, else if, if)
    // the method createServer with 2 arrguments stored in the variable server
    request.on("error", (err) => console.log("err in request:", err)); // it listens for error
    response.on("error", (err) => console.log("err in response:", err));
    /// this is a basic set up to create a sever

    // happens for every request that comes in:
    console.log("request method:", request.method);
    console.log("request url:", request.url);
    console.log("request headers:", request.headers);
    // content-type is the information we look for in headers

    if (request.method === "GET") {
        //   response.end(); - if respons is sent more than once ERROR message occurs

        if (request.url === "/secret-page") {
            // redirect to the page
            response.statusCode = 302;
            response.setHeader("Location", "/");
            response.end(); // this sends the response
            // these 3 must be send together
        } else {
            response.setHeader("content-type", "text/html");
            response.statusCode = 200;
            response.end(`Happy HTTP Day!`); // use backticks for control of the whitespace
        }
    } else if (request.method === "PUT") {
        response.statusCode = 200;
        response.end("<h1> you made a PUT request! </h1>");
    } else if (request.method === "POST") {
        console.log("you made a POST request!");

        let body = " ";
        request.on("data", (chunk) => {
            // listens for data
            // body = body + chunk
            body += chunk;
        });

        request.on("end", () => {
            // listens for end/send
            console.log("body:", body);
            response.setHeader("content-type", "text/html");
            response.statusCode = 200;
            response.end(
                `<h1> POST request has successfully been completed </h1>`
            );
        });
    } else if (request.method === "HEAD") {
        console.log("you made a HEAD request!");
    }
});

server.listen(
    8080, // 8080 where it listens form
    () => console.log("server is listening...")
);

//     response.setHeader("content-type", "text/html");
//     response.statusCode = 200;
//     response.end("Happy HTTP Day!");
// node . command in Terminal can be used only when a js file is called index.js
// ctrl c to stop server form running, after every change it has to be stopped and run again and then open localhost
// response.setHeader("content-type", "text/html"); // method that accept 2 arrg
// response.statusCode = 200; // this method uses always = equ operator
// response.write("Happy HTTP Day!");
// response.end(); // end means send
// // or in one step response.end("Happy HTTP Day!");

//Exercise: part 2 create new files (/n) to go to new line
