(function () {
    var navBar = document.getElementById("side-nav");
    var openNav = document.getElementById("nav");
    var closeNav = document.getElementById("hide-x");
    var overlayEfects = document.getElementById("overlay");

    openNav.addEventListener("click", function () {
        navBar.classList.add("overlay");
        navBar.style.visibility = "visible";
        overlayEfects.style.visibility = "visible";
    });

    closeNav.addEventListener("click", function () {
        navBar.classList.remove("overlay");
        navBar.style.visibility = "hidden";
        overlayEfects.style.visibility = "hidden";
    });
})();
