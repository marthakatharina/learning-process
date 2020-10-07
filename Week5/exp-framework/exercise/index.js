const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(express.urlencoded({ extended: false }));
// app.use((req, res, next) => {
//     console.log("MIDDLEWARE running!!");
//     console.log(`a ${req.method} request was made to the ${req.url} route`);
//     next();
// });

app.use(cookieParser());

app.use(express.static("./projects"));

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
                <input type="checkbox" name="cookies"><span>Do you accept cookies?</span>
                <button> submit </submit>
            </div>     
        </form>
    `);
});

app.post("/cookie", (req, res) => {
    const { cookies } = req.body;
    res.cookie("first-cookie", "this is sooo exciting!!!");
    res.cookie("authenticated", true);
    console.log("POST request made to the /cookie route");
    if (cookies) {
        res.send(`
            <h1>Thank you for accepting cookies!</h1>
            <h2>Now, you can see all the projects I worked so hard on at the Spiced Academy</h2>
            
        
        `);
    } else {
        res.send(`
            <h1> I am sorry you didn't want to check out my projects</h1>
            <h3>Don't worry, they will be here when you come back</h3>
        `);
    }
});

app.get("/", (req, res) => {
    console.log("req.cookies: ", req.cookies);
    if (req.cookies.authenticated) {
        res.sendFile(__dirname + "/index.html");
    } else {
        res.redirect("/cookie");
    }
});

app.listen(8080, () => console.log("Server Listening!"));
