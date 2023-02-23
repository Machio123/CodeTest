$(function() {
    var text = $(".text");
    $(window).scroll(function() {
        var scroll = $ (window).scrollTop();

        if (scroll >= 200) {
            text.removeClaass("hidden");
        } else {
            text.addClass("hidden");
        }
    });
});