(function () {
    var kitties = document.querySelectorAll(".kitty-container img");
    // var transitionOnScreen = document.querySelectorAll(
    //     ".kitty-container img.onscreen"
    // );
    // var transitionOffScreen = document.querySelectorAll(
    //     ".kitty-container img.offscreen-left"
    // );
    // var transition = kitties.setTimeout;
    var img = 0;
    setTimeout(moveKitties, 3000);

    function moveKitties() {
        // to remove a kitty from the screen...
        kitties[img].classList.remove("onscreen");

        // to pull the next kitty onscreen...
        kitties[img].classList.add("offscreen-left");

        img++;
        if (img === 4) {
            return img;
        }

        kitties[img].classList.add("onscreen");
    }

    document.addEventListener("transitionend", function (e) {
        if (e.target.classList.value === "offscreen-left") {
            e.classList.remove("offscreen-left");
        } else {
            return;
        }

        // "transitionend" fires whenever ANY transition ends
        // this is the code that will put the kitties back in the queue!
        /*
        we have two transitions that might end:
            1. queue -> onscreen
                - the event listener does not care about this transition
            2. onscreen -> offscreen-left 
                - the event listener DOES care about this transition!!!
                - when this transition ends, remove the offscreen-left class 
        so... what the "transitionend" event listener will have to do is...
            1. detect if the transition that just ended is the transition to offscreen-left
                - if the transition that ended is the transition to onscreen, do nothing 
                - if the transition that ended is the transition to offscreen, do something! :)
                    - specifically... remove the offscreen-left class from the element that has it 
        */
    });
})(); // INVOKE YOUR IFFE!!!!!!!
