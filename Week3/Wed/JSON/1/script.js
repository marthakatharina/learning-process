// console.log("!insane");
// console.log($);

var textArea = $("textarea");
console.log("this is textarea");

var validate = $("button");

validate.click(function () {
    var text = textArea.val();

    try {
        JSON.parse(text);
        alert("Yes, this is JSON!");
    } catch (err) {
        alert("Error! Try again!");
    }
});
