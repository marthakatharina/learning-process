//1
function logType(x) {
    if (typeof x == "undefined") {
        console.log("undefined!");
    } else if (x == null) {
        console.log("null!");
    } else if (typeof x == "number") {
        console.log("number!");
    } else if (x == isNaN) {
        console.log("not a number!");
    } else if (typeof x == "string") {
        console.log("string");
    } else if (Array.isArray(x)) {
        console.log("array!");
    } else if (typeof x == "object") {
        console.log("object!");
    } else if (typeof x == "function") {
        console.log("function!");
    } else {
        console.log("I have no idea!");
    }
}
logType();

//2
var a = {
    Berlin: "Germany",
    Paris: "France",
    "New York": "USA",
};
var b = {};
for (var key in a) {
    b[a[key]] = key;
}
console.log(a);

//3
var i = 11;
while (i > 1) {
    i--;
    console.log(i);
}
