const url = require("url");
console.log(
    url.parse("https://spiced.academy/program/full-stack-web-development/")
);

const queryString = require("querystring");
console.log(
    queryString.parse(
        "https://spiced.academy/program/full-stack-web-development/"
    )
);
