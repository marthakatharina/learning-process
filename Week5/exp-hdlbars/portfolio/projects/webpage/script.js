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

    var jqModal = $("#modal");
    console.log("jqModal: ", jqModal);
    var jqcloseModal = $("#modal a");
    var jqOverlay = $("#overlay");

    setTimeout(function () {
        // jqModal.show();
        // jqModal.addClass("overlay");
        jqModal.css({ visibility: "visible" });
        jqOverlay.css({ visibility: "visible" });
    }, 1000);

    jqcloseModal.on("click", function () {
        jqModal.hide();
        // jqModal.removeClass("overlay");
        jqOverlay.css({ visibility: "hidden" });
    });
})();
