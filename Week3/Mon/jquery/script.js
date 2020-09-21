(function () {
    // var headlinesContainer = document.getElementById("headlines");
    var jqHeadlinesContainer = $("#headlines");
    // var links = document.getElementsByTagName("a");
    var jqLinks = $("a");
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
            jqHeadlinesContainer.append(jqLinks.eq(0));
        }

        movement = requestAnimationFrame(animateHeadlines);
    }

    for (var i = 0; i < jqLinks.length; i++) {
        jqLinks.eq(i).on("mouseenter", function () {
            cancelAnimationFrame(movement);
        });

        jqLinks.eq(i).on("mouseleave", function () {
            requestAnimationFrame(animateHeadlines);
        });
    }
})();
