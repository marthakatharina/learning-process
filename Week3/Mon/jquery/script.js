(function () {
    // var headlinesContainer = document.getElementById("headlines");
    var jqHeadlinesContainer = $("#headlines");
    // var links = document.getElementsByTagName("a");
    // var jqLinks = $("a");
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

        if (jqLeftSide <= -$("a").eq(0).width()) {
            jqLeftSide += $("a").eq(0).width();
            $("a").eq(0).appendTo(jqHeadlinesContainer);
        }

        movement = requestAnimationFrame(animateHeadlines);
    }

    for (var i = 0; i < $("a").length; i++) {
        $("a")[0].on("mouseenter", function () {
            cancelAnimationFrame(movement);
        });

        $("a")[0].on("mouseleave", function () {
            requestAnimationFrame(animateHeadlines);
        });
    }
})();
