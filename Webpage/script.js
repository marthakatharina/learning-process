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

    // modal jq not working yet :(

    var jqModal = $("#modal");
    var jqcloseModal = $("#modal a");
    var jqOverlay = $("#overlay");

    jqModal.on(
        setTimeout(function () {
            jqModal.addClass("overlay");
            jqOverlay.css({ visibility: "visible" });
        }, 1000)
    );

    //removes the "active" class to .popup and .popup-content when the "Close" button is clicked
    jqcloseModal.on("click", function () {
        jqModal.removeClass("overlay");
        jqOverlay.css({ visibility: "hidden" });
    });
})();
