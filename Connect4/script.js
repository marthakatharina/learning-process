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
        } else if (checkForDiagonalVictory()) {
            console.log("diag victory");
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
        }
        // else {
        //     console.log("no victory!");
        //     alert("No Win!");
        // }
        switchPlayer();
    });

    var slots = $(".slot");

    var diags = [
        [0, 7, 14, 21],
        [1, 8, 15, 22],
        [2, 9, 16, 23],
        [3, 8, 13, 18],
        [4, 9, 14, 19],
        [5, 10, 15, 20],
        [6, 13, 20, 27],
        [7, 14, 21, 28],
        [8, 15, 22, 29],
        [9, 14, 19, 24],
        [10, 15, 20, 25],
        [11, 16, 21, 26],
        [12, 19, 26, 33],
        [13, 20, 27, 34],
        [14, 21, 28, 35],
        [15, 20, 25, 30],
        [16, 21, 26, 31],
        [17, 22, 27, 32],
        [18, 25, 32, 39],
        [19, 26, 33, 40],
        [20, 27, 34, 41],
        [21, 26, 31, 36],
        [22, 27, 32, 37],
        [23, 28, 33, 38],
    ];

    diags = diags.map(function (arr) {
        var elems = slots.eq(arr.shift());
        while (arr.length) {
            elems = elems.add(slots.eq(arr.shift()));
        }
        return elems;
    });

    function checkForDiagonalVictory() {
        for (var i = 0; i < diags.length; i++) {
            if (checkForVictory(diags[i])) {
                return true;
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
