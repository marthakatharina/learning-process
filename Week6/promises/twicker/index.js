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

/////// PROMISE.ALL ///////
///// something has to be changed in export js to make it work - screen_name and user_id to get all 3 promisses (tweets form 3 different accounts at the same time)

// app.get("/links.json", (req, res) => {
//     getToken()
//         .then((bearerToken) => {
//             Promise.all([
//                 getTweets(bearerToken, "zeitonline"),
//                 getTweets(bearerToken, "guardian"),
//                 getTweets(bearerToken, "rzeczpospolita"),
//             ])
//                 .then((results) => {
//                     const mergedResults = [
//                         ...results[0],
//                         ...results[1],
//                         ...results[2],
//                     ];
//                     const sortedTweets = mergedResults.sort((a, b) => {
//                         return new Date(b.created_at) - new Date(a.created_at);
//                     });
//                     // filter tweets and send them back
//                     const filteredTweets = filterTweets(sortedTweets);
//                     res.json(filteredTweets);
//                 })
//                 .catch((err) => {
//                     console.log("err in promise all: ", err);
//                 });
//         })
//         .catch((err) => {
//             console.log("err in catch: ", err);
//         });
// });

app.listen(8080, () => console.log("twicker up and running"));
