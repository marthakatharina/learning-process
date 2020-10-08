const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(express.urlencoded({ extended: false }));

const basicAuth = require("basic-auth");

const auth = function (req, res, next) {
    const creds = basicAuth(req);
    if (!creds || creds.name != "marta" || creds.pass != "123") {
        res.setHeader(
            "WWW-Authenticate",
            'Basic realm="Enter your credentials to see this stuff."'
        );
        res.sendStatus(401);
    } else {
        next();
    }
};

app.use(auth);

app.use(cookieParser());

// app.use(express.static("./projects"));

app.get("/", (req, res) => {
    console.log("req.cookies: ", req.cookies);
    res.redirect("/cookie");
});

app.get("/cookie", (req, res) => {
    console.log("req.cookies: ", req.cookies);
    res.send(`
        <h2>Welcome to my Portfolio. To access all the content of my website you need to agree to the cookies policy </h2>
        <form method='POST' style="display: flex; flex-direction: column; justify-content: space-between; width: 40%; height: 50%;">
            <div>
            <h3>Do you accept cookies?</h3>
                <input type="checkbox" name="accept"><span>yes</span> <input type="checkbox" name="decline"><span>no</span>
                <button> submit </submit>
            </div>     
        </form>
    `);
});

app.post("/cookie", (req, res) => {
    const { accept, decline } = req.body;

    console.log("POST request made to the /cookie route");
    if (accept) {
        res.cookie("authenticated", true);
        res.redirect(req.cookies.url);
    } else if (decline) {
        res.send(`
            <h1> I am sorry you didn't want to check out my projects</h1>
            <h3>Don't worry, they will be here when you come back</h3>
        `);
    }
});

app.use((req, res, next) => {
    console.log("req.cookies: ", req.cookies);
    if (req.cookies.authenticated) {
        next();
    } else {
        console.log(req.originalUrl);
        res.cookie("url", req.originalUrl);
        res.redirect("/cookie");
    }
});

app.use(express.static("./projects"));

app.listen(8080, () => console.log("Server Listening!"));
