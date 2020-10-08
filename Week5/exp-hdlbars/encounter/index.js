const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const jsonfile = require("../data.json");

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
    });
});

app.listen(8080, () => console.log("Server listening"));

// res.render is only for using templates and used a string as first arrgument and second an object {} with our data
