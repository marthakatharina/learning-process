const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const jsonfile = require("../data.json");

// declaring helpers globally:
// it can be called form many places from wherever we want
const hbSet = handlebars.create({
    helpers: {
        globalHello() {
            return "Global Hello right back!!";
        },
    },
});

app.engine("handlebars", handlebars());
app.set("view engine", "handlbars");
app.use(express.static("./projects"));

app.get("/", (req, res) => {
    res.render("home", {
        // refers to home.handlebars html
        layout: null,
        // or layout: main
        cohort: "Pimento",
        jsonfile, // now you can loop over the jsonfile
        // here we can pass an array of objects like jason [multiple emojis]
        helpers: {
            // declaring locally
            shouting(text) {
                return text.slice(5).replace().toUpperCase() + "!!!";
                // whatever can be mainipulated
            },
        },
    });
});

app.listen(8080, () => console.log("Server listening"));

// res.render is only for using templates and used a string as first arrgument and second an object {} with our data

// helpers are functions and must be written in index.js they can be declared locally or globally, if globally they can be used in more than one place
