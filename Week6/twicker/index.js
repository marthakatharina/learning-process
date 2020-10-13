const express = require("express");
const app = express();

const { getToken, getTweets, filterTweets } = require("./ticker.js");

app.use(express.static("ticker"));

app.get("/links.json", (req, res) => {
    console.log("requesting JSON!!!");

    //1. ask twitter API for a token:
    getToken(function (err, bearerToken) {
        if (err) {
            console.log("Error in getToken", err);
            return;
        }
        console.log("bearerToken: ", bearerToken);

        // 2. use that token, to make a request for tweets:
        getTweets(bearerToken, function (
            err,
            tweets // callback fn as 2nd arrgument)
        ) {
            if (err) {
                console.log("Error in getTweets", err);
                return;
            }

            // 3. "tidy up" and format the tweets:
            const filteredTweets = filterTweets(tweets);
            // 4. send back those "filteredTweets" as a response
            res.json(filteredTweets);
        });
    });

    // res.json([{}, {}, {}]);
}); //links.json is name of file in ajax

app.listen(8080, () => console.log("twicker up and running"));

// function logToken(token) (
//     console.log("I need the token to do something", token);
// )
// const { getToken } = require("./ticker.js");

// logToken(token);
