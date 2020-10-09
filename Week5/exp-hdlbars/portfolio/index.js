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

app.get("/projects/:project", (req, res) => {
    const { project } = req.params;
    const selectedProject = projectsData.find(
        (item) => item.directory === project
    );
    if (!selectedProject) {
        return res.sendStatus(404);
    }
    res.render("description", {
        layout: "main",
        selectedProject,
        projectsData,
    });
});

app.listen(8080, () => console.log("Server Listening!"));
