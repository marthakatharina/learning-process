(function () {
    var inputField = $("input");
    var div = $(".results");

    var index = 0;
    var highlight = false;
    var results;

    //Clean will delete highlight class everytime we selected something with mouse event and then fire key event or vice versa
    var clean = function () {
        for (var l = 0; l < $("p").length; l++) {
            $("p").eq(l).removeClass("highlight");
        }
    };

    inputField.on("input", function result() {
        var userInput = inputField.val().toLowerCase();

        $.ajax({
            url: "https://spicedworld.herokuapp.com/",
            data: {
                q: userInput,
            },

            success: function (response) {
                console.log("Ajax data request from API");
                if (userInput === inputField.val().toLowerCase()) {
                    results = response;
                    build();
                } else {
                    console.log("discard");
                }
            },
        });

        function build() {
            index = 0;
            div.show();
            highlight = false;

            var htmlForCountries = "";

            if (results.length === 0) {
                htmlForCountries += "<p>No results</p>";
                div.html(htmlForCountries);
                if (inputField.val() == []) {
                    div.html("");
                }
            } else {
                for (var j = 0; j < results.length; j++) {
                    htmlForCountries +=
                        "<p class='country' id='" +
                        j +
                        "'>" +
                        results[j] +
                        "</p>";
                }
                div.html(htmlForCountries);
            }
            return results;
        }
    });

    div.on("mouseover", "p", function (e) {
        clean();
        $(e.target).addClass("highlight");
        highlight = true;
        index = e.target.id;
        div.on("mouseleave", "p", function (e) {
            $(e.target).removeClass("highlight");
            index = 0;
            highlight = false;
        });
    });

    div.on("mousedown", "p", function (e) {
        inputField.val($(e.target).text());
        div.hide();
    });

    inputField.on("keydown", function (e) {
        for (var k = 0; k < $("p").length; k++) {
            if ($("p").eq(k).hasClass("highlight")) {
                highlight = true;
            }
        }
        if (e.keyCode === 13) {
            inputField.val($(".highlight").text());
            div.hide();
        }

        clean();

        if (e.keyCode === 40 && !highlight) {
            $("p").eq(index).addClass("highlight");
            highlight = true;
        } else if (e.keyCode === 40) {
            index++;
            if (index === $("p").length) {
                $("p")
                    .eq($("p").length - 1)
                    .removeClass("highlight");
                index = 0;
            }
            $("p").eq(index).prev().removeClass("highlight");
            $("p").eq(index).addClass("highlight");
        }

        if (e.keyCode === 38 && !highlight) {
            $("p")
                .eq($("p").length - 1)
                .addClass("highlight");
            highlight = true;
            index = $("p").length - 1;
        } else if (e.keyCode === 38) {
            index--;
            if (index === -1) {
                $("p").eq(0).removeClass("highlight");
                index = $("p").length - 1;
            }
            $("p").eq(index).next().removeClass("highlight");
            $("p").eq(index).addClass("highlight");
        }
    });

    inputField.on("focus", function () {
        div.show();
    });

    inputField.on("blur", function () {
        div.hide();
    });
})();
