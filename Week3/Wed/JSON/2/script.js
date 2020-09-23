(function translateNumberToGerman(numbers) {
    var enterNumber = $("input");
    var resultDiv = $(".result");
    function askForNumber() {
        var num = prompt("Please enter a number between 1 and 10");
        if (num >= 1 && num <= 10 && num == parseInt(num)) {
            return num;
        }
        throw new Error("Bad number");
    }
})([
    "eins",
    "zwei",
    "drei",
    "vier",
    "fünf",
    "sechs",
    "sieben",
    "acht",
    "neun",
    "zehn",
]);
