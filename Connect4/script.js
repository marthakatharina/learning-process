(function () {
    var currentPlayer = "player1";

    $(".column").on("click", function (e) {
        var col = $(e.currentTarget);
        var slotsInCol = col.children();

        for (var i = slotsInCol.length - 1; i >= 0; i--) {
            if (
                !slotsInCol.eq(i).hasClass("player1") &&
                !slotsInCol.eq(i).hasClass("player2")
            ) {
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
            // $(".victory").css({
            //     visibility: "visible",
            //     backgroundColor: "yellow",
            // });

            if (slotsInCol.hasClass("player1")) {
                $(".victory").css({
                    visibility: "visible",
                    backgroundColor: "red",
                });
            } else {
                $(".victory").css({
                    visibility: "visible",
                    backgroundColor: "yellow",
                });
            }
            $("#overlay").css({
                visibility: "visible",
            });

            setTimeout(function () {
                $("button").css({ visibility: "visible" });
            }, 2000);
        } else if (checkForVictory(slotsInRow)) {
            console.log("row victory");
            $(".victory").css({
                visibility: "visible",
                backgroundColor: "blue",
            });
            $("#overlay").css({
                visibility: "visible",
            });

            setTimeout(function () {
                $("button").css({ visibility: "visible" });
            }, 2000);
        } else if (checkForDiagonals()) {
            console.log("diag victory");
        }
        // else {
        //     console.log("no-one won!");
        //     setTimeout(function () {
        //         $("button").css({ visibility: "visible" });
        //     }, 2000);

        // }
        switchPlayer();
    });

    function checkForDiagonals() {
        var diags = [
            [0, 7, 14, 21],
            [6, 13, 20, 27],
            [12, 19, 26, 33],
        ];
    }
    function checkForVictory(slots) {
        // here looping for slots
        var count = 0;
        for (var i = 0; i < slots.length; i++) {
            var slot = $(slots[i]); // refactoring
            if (slot.hasClass(currentPlayer)) {
                count++;
                if (count === 4) {
                    return true;
                }
            } else {
                count = 0;
            }
        }
    }

    $("button").click(function () {
        location.reload();
        // console.log("refresh");
    });

    function switchPlayer() {
        if (currentPlayer === "player1") {
            currentPlayer = "player2";
        } else {
            currentPlayer = "player1";
        }

        // other way (tenary operator):

        // currentPlayer = currentPlayer === "player1" ? "player2" : "player1";

        // or
        // currentPlayer === "player1" ?
        //     currentPlayer = "player2" :
        //     currentPlayer = "player1"
    }
    // console.log("before switch: " currentPlayer);
    // switchPlayer();
    // console.log("after switch: " currentPlayer);
})();
