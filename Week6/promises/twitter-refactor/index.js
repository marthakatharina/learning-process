const express = require("express");
const app = express();

const { getToken, getTweets, filterTweets } = require("./ticker.js");

app.use(express.static("ticker"));

app.get("/links.json", (req, res) => {
    getToken()
        .then((bearerToken) => {
            return getTweets(bearerToken); // must return a value or fn before next .then
        })
        .then((tweets) => {
            const filteredTweets = filterTweets(tweets);
            res.json(filteredTweets);
        })
        .catch((err) => {
            console.log("err in catch:", err);
        });
});

app.listen(8080, () => console.log("twicker up and running"));
