(function () {
    var navBar = document.getElementById("nav");
    var openNav = document.getElementById("side-nav");
    var closeNav = document.getElementById("hide-x");

    openNav.addEventListener("click", function () {
        navBar.classList.add("side-nav");
    });

    closeNav.addEventListener("click", function () {
        navBar.classList.remove("hide-x");
    });
})();
