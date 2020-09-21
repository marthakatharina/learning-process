(function () {
    // var headlinesContainer = document.getElementById("headlines");
    var jqHeadlinesContainer = $("#headlines");
    // var links = document.getElementsByTagName("a");
    var jqLinks = $("#headlines a");
    // var leftSide = headlinesContainer.offsetLeft;
    var jqLeftSide = jqHeadlinesContainer.offset().left;
    // var movement;
    var movement;

    animateHeadlines();

    function animateHeadlines() {
        jqLeftSide -= 1; // --
        jqHeadlinesContainer.css({
            left: jqLeftSide + "px",
        });

        if (jqLeftSide <= -jqLinks.eq(0).width()) {
            jqLeftSide += jqLinks.eq(0).width();
            $("#headlines").append(jqLinks.eq(0));
        }

        movement = requestAnimationFrame(animateHeadlines);
    }

    for (var i = 0; i < jqLinks.length; i++) {
        $("#headlines a")
            .eq(0)
            .on("mouseenter", function () {
                cancelAnimationFrame(movement);
            });

        $("#headlines a")
            .eq(0)
            .on("mouseleave", function () {
                requestAnimationFrame(animateHeadlines);
            });
    }
})();
