(function () {
    var headlinesContainer = document.getElementById("headlines");
    var leftSide = headlinesContainer.offsetLeft;
    var links = document.getElementsByTagName("a");
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

    movement = requestAnimationFrame(animateHeadlines);

    cancelAnimationFrame(movement);
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("mouseenter", function (event) {
            if (event.innerText === movement) {
                links[i].style.color = "green";
                links[i].style.textDecoration = "underline";
            }
        });
        links[i].removeEventListener("mouseleave", function () {
            if (event.innerText !== movement) {
                links[i].style.color = "unset";
                links[i].style.textDecoration = "none";
            }
        });
    }
})();
