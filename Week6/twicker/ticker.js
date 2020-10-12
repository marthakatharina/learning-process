const secret = require("./secret.json"); // const { Key, Secret } = require('./secrets.json');
const https = require("https"); //https is secure
const { type } = require("os");
const { response } = require("express");
const querystring = require("querystring");

module.exports.getToken = function (callback) {
    // this function will get the token from twitter - makes req to tweeter
    // we need to have a callback function here
    let creds = `${secret.Key}:${secret.Secret}`; // or `${Key}:${Secret}`;
    let encodedCreds = Buffer.from(creds).toString("base64"); // it encodes secret.json credentials Key and Secret
    const options = {
        method: "POST",
        host: "api.twitter.com",
        path: "/oauth2/token",
        headers: {
            Authorization: `Basic ${encodedCreds}`,
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
    };

    function cb(response) {
        // // this function will get the token from twitter
        //// encode consumer key and secret: documentation
        if (response.statusCode != 200) {
            console.log("something went wrong...", response.statusCode);
            callback(response.statusCode);
            return;
        }
        let body = "";
        response.on("data", function (chunk) {
            body += chunk;
        });
        response.on("end", function () {
            // this is the success fn
            // console.log("body:", body); // body includes the key
            let parsedBody = JSON.parse(body); // this converts json to object
            console.log("parsedBody: ", parsedBody);
            callback(null, parsedBody.access_token);
        }); // set to anything falsy (like eg. null or undefinded) as a first argument it says that there was no error
    } // this fn will be also reused in getTweets

    const req = https.request(options, cb);
    req.end("grant_type=client_credentials");
}; // req sent to twitter to get the token

module.exports.getTweets = function (bearerToken, callback) {
    const getOptions = {
        method: "GET",
        host: "api.twitter.com",
        path:
            "/1.1/statuses/user_timeline.json?screen_name=nytimes&tweet_mode=extended",
        headers: {
            Authorization: "Bearer " + bearerToken,
        },
    };

    function getCb(getResponse) {
        if (getResponse.statusCode != 200) {
            console.log("something went wrong...", getResponse.statusCode);
            callback(getResponse.statusCode);
            return;
        }
        let body = "";
        getResponse.on("data", function (chunk) {
            body += chunk;
        });
        getResponse.on("end", function () {
            let parsedBody = JSON.parse(body);
            console.log("parsedBody: ", parsedBody);
            callback(null, parsedBody.access_token);
        });
    }

    const req = https.request(getOptions, getCb);
    req.end("full_text");
}; // req sent to twitter to get the tweets

// module.exports.filterTweets = function (tweets) {
//     // this function will tidy up the tweets from twitter

// };

// module.exports.getToken = function(callback) {
//     console.log('callback in getToken: ',callback);
//     let token;
//     setTimeout(function(){
//         token = "AERGERGAERHAERHAERHAERH";
//         console.log("About to return token");
//         callback(token);
//         // return token;
//     },2000)
// }
