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
                $(".victory").css({
                    visibility: "visible",
                    backgroundColor: "#DE0E0F",
                    position: "absolute",
                    top: "50%",
                    left: "10%",
                    transform: "translate(-50%, -50%)",
                });
            } else if (slotsInCol.eq(i).hasClass("player2")) {
                $(".victory").css({
                    visibility: "visible",
                    backgroundColor: "#FEE001",
                });
            }
            $("#overlay").css({
                visibility: "visible",
            });

            setTimeout(function () {
                $("#overlay").css({
                    background: "rgba(10, 10, 10, 0.5)",
                });
                $("button").css({
                    visibility: "visible",
                });
            }, 2500);
        } else if (checkForVictory(slotsInRow)) {
            console.log("row victory");

            if (slotsInCol.eq(i).hasClass("player1")) {
                $(".victory").css({
                    visibility: "visible",
                    backgroundColor: "#DE0E0F",
                    position: "absolute",
                    top: "50%",
                    left: "10%",
                    transform: "translate(-50%, -50%)",
                });
            } else if (slotsInCol.eq(i).hasClass("player2")) {
                $(".victory").css({
                    visibility: "visible",
                    backgroundColor: "#FEE001",
                });
            }

            $("#overlay").css({
                visibility: "visible",
            });

            setTimeout(function () {
                $("#overlay").css({
                    background: "rgba(10, 10, 10, 0.5)",
                });
                $("button").css({ visibility: "visible" });
            }, 2500);
        } else if (checkForDiagVictory(slotsInCol)) {
            console.log("diag victory");
        }
        // else if (checkForNoVictory()) {
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
            console.log("checking for diagonals");

            for (var j = 0; j < diagonals[i].length; j++) {
                console.log("checking for combinations");
                var slot = $(diagonals[i][j]);

                if (slot.hasClass(currentPlayer) === slots) {
                    console.log("what's up?");
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

    // function checkForNoVictory()

    $("button").click(function () {
        location.reload();
        // console.log("refresh");
    });
    $("#overlay").click(function () {
        location.reload();
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
