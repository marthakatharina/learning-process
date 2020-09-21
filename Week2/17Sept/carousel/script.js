(function () {
    var kitties = document.querySelectorAll(".kitty-container img");
    var dots = document.getElementsByClassName("dot");
    var img = 0;
    var timer;

    timer = setTimeout(moveKitties, 3000);

    function moveKitties() {
        // to remove a kitty from the screen...
        kitties[img].classList.remove("onscreen");
        dots[img].classList.remove("on");
        console.log(img);

        kitties[img].classList.add("offscreen-left");

        img++;
        if (img === 4) {
            //4 iamges or kittes.lenght
            img = 0;
        }
        // to pull the next kitty onscreen...
        kitties[img].classList.add("onscreen");
        dots[img].classList.add("on");
    }

    document.addEventListener("transitionend", function (e) {
        console.log(e);
        if (e.target.classList.value === "offscreen-left") {
            e.target.classList.remove("offscreen-left");
        } else {
            return;
        }

        timer = setTimeout(moveKitties, 3000);
    });

    for (var i = 0; i < dots.lenght; i++) {
        if (dots[i] == e.target) {
            console.log(i);
            break;
        }
    }

    // or
    // for (var i = 0; i < dots.length; i++) {
    //     dots[i].addEventListener("click", function (e) {
    //         console.log("clicked");
    //         clearTimeout(timer);
    //         console.log(e.target.dispatchEvent.slice(3));
    //     });
    // }
})(); // INVOKE YOUR IFFE!!!!!!!
