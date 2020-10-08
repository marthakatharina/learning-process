const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const projectsData = require("./proj-data.json");
console.log("projects: ", projectsData);

app.engine("handlebars", handlebars());
app.set("view engine", "handlebars");

app.use(express.static("./public"));

app.use(express.static("./projects"));

app.get("/", (req, res) => {
    res.render("welcome", {
        layout: "main",
        projectsData,
    });
});

app.listen(8080, () => console.log("Server Listening!"));
