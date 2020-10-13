const secret = require("./secret.json");
const https = require("https");

module.exports.getToken = function () {
    let creds = `${secret.Key}:${secret.Secret}`;
    let encodedCreds = Buffer.from(creds).toString("base64");
    const options = {
        method: "POST",
        host: "api.twitter.com",
        path: "/oauth2/token",
        headers: {
            Authorization: `Basic ${encodedCreds}`,
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
    };

    return new Promise((resolve, reject) => {
        function cb(response) {
            if (response.statusCode != 200) {
                console.log("something went wrong...", response.statusCode);
                reject(response.statusCode);
                return;
            }
            let body = "";
            response.on("data", function (chunk) {
                body += chunk;
            });
            response.on("end", function () {
                let parsedBody = JSON.parse(body);
                console.log("parsedBody: ", parsedBody);
                resolve(parsedBody.access_token);
            });
        }

        const req = https.request(options, cb);
        req.end("grant_type=client_credentials");
    });
};

module.exports.getTweets = function (bearerToken, account) {
    const getOptions = {
        method: "GET",
        host: "api.twitter.com",
        path: `/1.1/statuses/user_timeline.json?count=20&screen_name=${account}&tweet_mode=extended`, // backticks instead of "" with ${account}
        headers: {
            Authorization: "Bearer " + bearerToken, // or `Bearer ${bearerToken}`
        },
    };

    return new Promise((resolve, reject) => {
        function getCb(getResponse) {
            if (getResponse.statusCode != 200) {
                console.log("something went wrong...", getResponse.statusCode);
                reject(getResponse.statusCode);
                return;
            }
            let body = "";
            getResponse.on("data", function (chunk) {
                body += chunk;
            });
            getResponse.on("end", function () {
                let parsedBody = JSON.parse(body);
                console.log("parsedBody: ", parsedBody);
                resolve(parsedBody);
            });
        }

        const req = https.request(getOptions, getCb);
        req.end();
    });
};

module.exports.filterTweets = function (tweets) {
    let tweetUrl = [];
    let filterUrls = (url) => {
        return url.entities.urls.length === 1;
    };
    let filteredUrls = tweets.filter(filterUrls);
    console.log("filteredUrls:", filteredUrls);

    // for (let i = 0; i < filteredUrls.length; i++) {
    //     tweetUrl.push({
    //         text: filteredUrls[i]["full_text"].split("http")[0],
    //         href: filteredUrls[i].entities.urls[0].url,
    //     });

    // rewrtitten loop with forEach:
    filteredUrls.forEach((arg) => {
        tweetUrl.push({
            text: `"${arg.user.name}": ${arg["full_text"].split("http")[0]}`,
            href: arg.entities.urls[0].url,
        });
    });
    return tweetUrl;
};
