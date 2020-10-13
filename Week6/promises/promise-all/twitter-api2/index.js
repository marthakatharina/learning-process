const express = require("express");
const app = express();

const { getToken, getTweets, filterTweets } = require("./ticker.js");

app.use(express.static("ticker"));

/////// PROMISE.ALL ///////
///// to be changed in export js GET path screen_name (user_id - ${account}) to get all 3 promises (tweets form 3 different accounts at the same time). And in Filter user.name added

app.get("/links.json", (req, res) => {
    getToken()
        .then((token) => {
            Promise.all([
                getTweets(token, "zeitonline"),
                getTweets(token, "guardian"),
                getTweets(token, "rzeczpospolita"),
            ])
                .then((results) => {
                    const mergedResults = [
                        ...results[0],
                        ...results[1],
                        ...results[2],
                    ];
                    const sortedTweets = mergedResults.sort((a, b) => {
                        return new Date(b.created_at) - new Date(a.created_at);
                    });
                    // filter tweets and send them back
                    const filteredTweets = filterTweets(sortedTweets);
                    res.json(filteredTweets);
                })
                .catch((err) => {
                    console.log("err in promise all: ", err);
                });
        })
        .catch((err) => {
            console.log("err in catch: ", err);
            res.sendStatus(500);
        });
});

app.listen(8080, () => console.log("twicker up and running"));
