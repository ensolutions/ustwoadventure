
var $document = $(document);

$document.mousemove(function(e) {
    var width = $document.width() / 255;
    var pageX = e.pageX / width;
    var pageY = e.pageY / width;
    var valueX = pageX - 122.5;
    var valueY = 122.5 - pageY;
    var valueX2 = pageX + 50;

    $(".letter span.stretch").css({"transform": "scale(" + valueX2/50 + "," + 1 +")", "margin-left": (valueX2-50)/2.5, "margin-right": (valueX2-50)/2.5});

    $("span.stretch.clear").css("transform", "scale(" + valueX/50 + "," + valueY/25 +")");
});
window.ondevicemotion = function(event) {
  var x = event.accelerationIncludingGravity.x;
  var y = event.accelerationIncludingGravity.y;
  var z = event.accelerationIncludingGravity.z;

  $(".letter span.stretch").css({"transform": "scale(" + (x+5)/5 + "," + 1 +")", "margin-left": 2.5*x, "margin-right": 2.5*x});

  $("span.stretch.clear").css("transform", "scale(" + (x+3)/5 + "," + ((-y)+3)/5 +")");
}




var chars = $(".move").html().split('');
$(".move").empty();
for (var i = 0; i < chars.length; i++) {
    $(".move").append("<span class='letter" + i + "'>" + chars[i] + "</span>");
    $(".letter" + i).css({
        "position":"relative",
        "transition-duration":"0.1s"
    });
}
$( "#move span" ).mouseover(function() {

});


$(document).on("mousemove", function (e) {
    for (var i = 0; i < chars.length; i++) {
        var x = e.pageX,
            y = e.pageY;
        var distx = x - $(".letter" + i).offset().left + ($(".letter" + i).width() / 2);
        var disty = y - $(".letter" + i).offset().top;

        if (Math.abs(distx) < 24 && Math.abs(disty) < 24) {
            if (distx > 6 || distx < -6) {
                if (x < $(".letter" + i).offset().left) {
                    $(".letter" + i).css({
                        "left": + (24 / Math.abs(distx) * Math.abs(distx)),
                            "position": "relative"
                    });
                } else {
                    $(".letter" + i).css({
                        "left": - (24 / Math.abs(distx) * Math.abs(distx)),
                            "position": "relative"
                    });
                }
            }
            if (disty > 12 || disty < -12) {
                if (y < $(".letter" + i).offset().top + 6) {
                    $(".letter" + i).css({
                        "top": + (24 / Math.abs(disty) * Math.abs(disty)),
                            "position": "relative"
                    });
                } else {
                    $(".letter" + i).css({
                        "top":  - (24 / Math.abs(disty) * Math.abs(disty)),
                            "position": "relative"
                    });
                }
            }
        }
        distx = 0;
        disty = 0;
    }
});
