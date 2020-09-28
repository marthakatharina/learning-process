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

            if (slotsInCol.eq(i).hasClass("player1")) {
                $(".victory1").css({
                    visibility: "visible",
                    backgroundColor: "#DE0E0F",
                });
            } else if (slotsInCol.eq(i).hasClass("player2")) {
                $(".victory2").css({
                    visibility: "visible",
                    backgroundColor: "#FEE001",
                });
            }
            $("#overlay").css({
                visibility: "visible",
            });
            resetGame();
        } else if (checkForVictory(slotsInRow)) {
            console.log("row victory");

            if (slotsInCol.eq(i).hasClass("player1")) {
                $(".victory1").css({
                    visibility: "visible",
                    backgroundColor: "#DE0E0F",
                });
            } else if (slotsInCol.eq(i).hasClass("player2")) {
                $(".victory2").css({
                    visibility: "visible",
                    backgroundColor: "#FEE001",
                });
            }

            $("#overlay").css({
                visibility: "visible",
            });
            resetGame();
        } else if (checkForDiagVictory()) {
            console.log("diag victory");
        }
        // else {
        //     console.log("no victory!");

        // }
        switchPlayer();
    });

    function checkForDiagVictory(slots) {
        var diagonals = [
            [0, 7, 14, 21],
            [6, 13, 20, 27],
            [12, 19, 26, 33],
            [18, 25, 32, 39],
            [1, 8, 15, 22],
            [7, 14, 21, 28],
            [13, 20, 27, 34],
            [19, 26, 33, 40],
            [2, 9, 16, 23],
            [8, 15, 22, 29],
            [14, 21, 28, 35],
            [20, 27, 34, 41],
            [3, 8, 13, 18],
            [9, 14, 19, 24],
            [15, 20, 25, 30],
            [21, 26, 31, 36],
            [4, 9, 14, 19],
            [10, 15, 20, 25],
            [16, 21, 26, 31],
            [22, 27, 32, 37],
            [5, 10, 15, 20],
            [11, 16, 21, 26],
            [17, 22, 27, 32],
            [23, 28, 33, 38],
        ];

        var count = 0;
        for (var i = 0; i < diagonals.length; i++) {
            // console.log("checking for diagonals");
            // var combinations = $(slots[i]);
            for (var j = 0; j < diagonals[i].length; j++) {
                // console.log("checking for combinations");
                var slot = $(diagonals[i][j]);

                if (slot.hasClass(currentPlayer) === slots) {
                    count++;
                    if (count === 4) {
                        return true;
                    }
                } else {
                    count = 0;
                }
            }
        }
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

    // function checkForNoVictory() {
    //
    // }

    function resetGame() {
        setTimeout(function () {
            $("#overlay").click(function () {
                location.reload();
            });
            $("button").click(function () {
                location.reload();
                // console.log("refresh");
            });
            $("#overlay").css({
                background: "rgba(10, 10, 10, 0.5)",
            });
            $("button").css({ visibility: "visible" });
        }, 2500);
    }

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
