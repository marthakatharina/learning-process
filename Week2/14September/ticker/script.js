(function () {
    // var ticker = document.getElementById(id);
    var headlinesContainer = document.getElementById("headlines");
    var links = document.getElementsByTagName("a");
    var leftSide = headlinesContainer.offsetLeft;
    // var headlinesWidth = headlinesContainer.offsetWidth;
    var movement;

    animateHeadlines();

    function animateHeadlines() {
        leftSide -= 1;
        headlinesContainer.style.left = leftSide + "px";

        if (leftSide <= -links[0].offsetWidth) {
            leftSide += links[0].offsetWidth;
            headlinesContainer.appendChild(links[0]);
        }

        movement = requestAnimationFrame(animateHeadlines);
    }

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("mouseenter", function (e) {
            cancelAnimationFrame(movement);
        });

        links[i].addEventListener("mouseleave", function () {
            requestAnimationFrame(animateHeadlines);
        });
    }
})();
