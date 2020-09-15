(function () {
    var headlines = document.getElementById("headlines");
    var links = document.getElementsByTagName("a");

    var left = headlines.offsetLeft;

    moveHeadlines();

    function moveHeadlines() {
        // left -200 px
        headlines.style.left = "-200px";
        // console.log(left);

        // call this fn again after a pause
        if (left <= -links[0].offsetWidth) {
            //set the left of headlines to the new left
            left += links[0].offsetWidth.appendChild(links[0]); // appendChild
            //take the fist link out and make it the last link
        }

        requestAnimationFrame(moveHeadlines);
    }
})();
