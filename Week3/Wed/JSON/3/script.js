var text = $("textarea");

text.on("input", function () {
    localStorage.setItem("text", text.val());

    console.log("this is set localy text");
});

$(document).ready(function () {
    text.val(localStorage.getItem("text"));

    console.log("this is stored localy text");
});
