// YouTube ID
var ytPlayList = [{id: "player1", VideoId: "vj8dUVO7afw"}];

// click event(optional)
$(document).ready(function () {
    $('.mov_box').hover(function () {
        ytTogglePlay();
    });
});


$("#player1").mouseenter(function () {
    var src = $(this).attr("src");
    var arr_str = src.split("&amp;");
    $(this).attr("src", arr_str[0]);
});

$("#player1").mouseleave(function () {
    $(this).attr("src", $(this).attr("src") + "&amp;autoplay=1");
});
