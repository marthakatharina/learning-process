(function () {
    // console.log($);

    var currentPlayer = "player1";

    $(".column").on("click", function (e) {
        // console.log("click on column");

        var col = $(e.currentTarget); // currentTarget is a method like target
        // console.log("col: ", col);
        var slotsInCol = col.children();
        // console.log(slotsinCol);
        for (var i = slotsInCol.length - 1; i >= 0; i--) {
            // console.log(slotsInCol.eg(i).hasClass("player1")); // hasClass is jq method
            if (
                !slotsInCol.eq(i).hasClass("player1") &&
                !slotsInCol.eq(i).hasClass("player2")
            ) {
                // console.log("time to do somethig");
                slotsInCol.eq(i).addClass(currentPlayer);
                break;
            }
        }
        console.log("i: ", i);
        if (i === -1) {
            return;
        }
        var slotsInRow = $(".row" + i);
        if (checkForVictory(slotsInCol)) {
            console.log("column victory");
        } else if (checkForVictory(slotsInRow)) {
            console.log("row victory");
        }
        switchPlayer();
    });

    function checkForVictory(slots) {
        // here looping for slots
        var count = 0;
        for (var i = 0; i < slots.length; i++) {
            if (slots.eq(i).hasClass(currentPlayer)) {
                count++;
                if (count === 4) {
                    return true;
                }
            } else {
                count = 0;
            }
        }
    }

    function switchPlayer() {
        // if (currentPlayer === "player1") {
        //     currentPlayer = "player2";
        // } else {
        //     currentPlayer = "player1";
        // }

        // other way (tenary operator):

        currentPlayer = currentPlayer === "player1" ? "player2" : "player1";

        // or
        // currentPlayer === "player1" ?
        //     currentPlayer = "player2" :
        //     currentPlayer = "player1"
    }
    // console.log("before switch: " currentPlayer);
    // switchPlayer();
    // console.log("after switch: " currentPlayer);
})();
