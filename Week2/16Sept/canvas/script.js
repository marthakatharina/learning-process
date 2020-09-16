(function () {
    // console.log("!insane");

    var canvas = document.getElementById("canvas");
    // console.log('canvas');
    var stick1 = canvas.getContext("2d");
    stick1.beginPath();

    stick1.strokeStyle = "firebrick";
    stick1.lineWidth = 2;

    stick1.beginPath(); // head
    stick1.arc(300, 100, 50, 0, 2 * Math.PI);
    //arc(x,y, radius, startingAngle, endAngle)
    stick1.stroke();
    // context.beginPath(); // seperates elements from each other

    stick1.moveTo(300, 150); // torso
    stick1.lineTo(300, 400);
    stick1.stroke();

    stick1.beginPath();
    stick1.moveTo(300, 250);
    stick1.lineTo(200, 150);
    // stick1.stroke();
    // it can be done with one path instaed of seperating it stroke aand beginPath
    // stick1.beginPath();
    stick1.moveTo(300, 250);
    stick1.lineTo(400, 150);
    stick1.stroke();

    stick1.beginPath();
    stick1.moveTo(300, 400);
    stick1.lineTo(200, 500);
    // stick1.stroke();

    // stick1.beginPath();
    stick1.moveTo(300, 400);
    stick1.lineTo(400, 500);
    stick1.stroke();

    var canvas2 = document.getElementById("second-canvas");
    var stick2 = canvas2.getContext("2d");

    stick2.strokeStyle = "firebrick";
    stick2.lineWidth = 2;

    stick2.beginPath();
    stick2.arc(200, 100, 50, 0, 2 * Math.PI);
    stick2.stroke();

    stick2.moveTo(200, 150); // torso
    stick2.lineTo(200, 400);
    stick2.stroke();

    stick2.beginPath();
    stick2.moveTo(200, 250);
    stick2.lineTo(100, 150);

    stick2.moveTo(200, 250);
    stick2.lineTo(300, 150);
    stick2.stroke();

    stick2.beginPath();
    stick2.moveTo(200, 400);
    stick2.lineTo(100, 500);
    stick2.moveTo(200, 400);
    stick2.lineTo(300, 500);
    stick2.stroke();
})();

//exercise//

// method; draw image , one canvas with stick, other with stick in other position
