const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
    console.log("MIDDLEWARE running!!");
    console.log(`a ${req.method} request was made to the ${req.url} route`);
    next();
});
app.use(cookieParser());
app.use(express.static("./public"));

app.get("/", (req, res) => {
    console.log("req.cookies: ", req.cookies);
    res.send("<h1>Hello Pimento!!!!</h1>");
});

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/users/:username/:postId", (req, res) => {
    const { username, postId } = req.params;
    res.send(`
        <h1>This is the page of ${username}</h1>
        <h3>This is blog post number ${postId}</h3>
    `);
});

app.get("/register", (req, res) => {
    res.send(`
        <h2>Please tell us about yourself</h2>
        <form method='POST' style="display: flex; flex-direction: column; justify-content: space-between; width: 40%; height: 50%;">
            <input type='text' name='firstname' placeholder='First Name' autocomplete='off'>
            <input type='text' name='lastname' placeholder='Last Name' autocomplete='off'>
            <div>
                <span>How old are you? </span><input type="number" name="age">
            </div>
            <div>
                <input type="checkbox" name="subscribe"><span>Would you like to receive our newsletter?</span>
            </div>
            <button> submit </submit>
        </form>
    `);
});

app.post("/register", (req, res) => {
    const { firstname, lastname, age, subscribe } = req.body;
    res.cookie("first-cookie", "this is sooo exciting!!!");
    res.cookie("authenticated", true);
    console.log("POST request made to the /register route");
    if (subscribe) {
        res.send(`
            <h1>Thank you ${firstname} ${lastname} for subscribing!</h1>
            <h2>You are ${age} years old, apparently 🤷🏻‍♂️ 🕺🏻 🤞🏻</h2>
        `);
    } else {
        res.send(`
            <h1> We are sorry you didnt want to subscribe ${firstname}</h1>
            <h3>We'll get over it in ${age} years....😭</h3>
        `);
    }
});

app.get("/private", (req, res) => {
    console.log("req.cookies: ", req.cookies);
    if (req.cookies.authenticated) {
        res.send(`
            <h1>TOP SECRET INFORMATION ✋ ⛔️ 🔞 🙅‍♂️</h1>
            <h3>this is sooooo secret</h3>
        `);
    } else {
        res.redirect("/");
    }
});

app.listen(8080, () => console.log("Server Listening!"));

// const express = require("express");

// ${req.method} is the same as GET
// ${req.url} is the root

// dynamic routing:
// app.get('/users/:username', () => // must be : before username
// { //pream is specific only to express, get users' details with one route
// const {username} = req.params;
// colon : (like in eg. :username) and req.params go always together

// })

// middleware must be place between require and requests (above routs (GET etc.)), works on all routs and it uses method .use(), this is only for POST routs
// next is a method
// static is a method
// use(express.static('./public') makes requests publicly available
// middelware .use() for cookies parser has to go above (before) express.static
// req.cookies (pl) and res.cookie (sing) !!
// cookies.authenticated grants permission to visit website
