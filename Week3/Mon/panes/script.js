console.log("!insane");

var slider = $("#slider");
var container = $("#container");
var image = $(".image");

slider.on("mousedown", function () {
    container.on("mousemove", function (e) {
        slider.eq(0).css({
            left: e.clientX - container.eq(0).offset().left + "px",
        });
        image.eq(1).css({
            width: e.clientX - container.eq(0).offset().left + "px",
        });
    });
    $(document).on("mouseup", function () {
        container.off("mousemove");
    });
});
