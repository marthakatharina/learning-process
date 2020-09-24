(function () {
    // var headlinesContainer = document.getElementById("headlines");
    var jqHeadlinesContainer = $("#headlines");
    // var links = document.getElementsByTagName("a");
    var jqLinks = $("a");
    // var leftSide = headlinesContainer.offsetLeft;
    var jqLeftSide = jqHeadlinesContainer.offset().left;
    // var movement;
    var movement;

    /////// AJAX - obtaining data from JSON file //////

    $.ajax({
        url: "/data.json",
        success: function (response) {
            var myHtml = "";
            for (var i = 0; i < response.length; i++) {
                myHtml +=
                    '<a href="' +
                    response[i].links +
                    '">' +
                    response[i].titles +
                    "</a>"; // fetched links and titles to html from data.json
            }
            jqHeadlinesContainer.html(myHtml);
            // must use .html method
        },
    });

    animateHeadlines();

    function animateHeadlines() {
        jqLeftSide -= 1; // --
        jqHeadlinesContainer.css({
            left: jqLeftSide + "px",
        });

        if (jqLeftSide <= -$("a").eq(0).width()) {
            jqLeftSide += $("a").eq(0).width();
            $("a").eq(0).appendTo(jqHeadlinesContainer);
        }

        movement = requestAnimationFrame(animateHeadlines);
    }

    for (var i = 0; i < jqLinks.length; i++) {
        jqLinks[0].on("mouseenter", function () {
            cancelAnimationFrame(movement);
        });

        jqLinks[0].on("mouseleave", function () {
            requestAnimationFrame(animateHeadlines);
        });
    }
})();
