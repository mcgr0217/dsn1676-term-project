var $btnShowHide = $(".btn-show-hide");
var $box = $(".box");
var $thumbs = $(".thumbnails");
var $lbImg = $(".lightbox-img");
var $lb = $(".lightbox");
var $btnClose = $(".btn-close");
var $tabs = $(".tabs");
var $panel = $(".panel");
var logoText = $(".logo-text");

$logo-text.on("click", function () {
    $caption.toggleClass("js-box-hide");
});

$btnShowHide.on("click", function () {
    $box.toggleClass("js-box-hide");
});

$thumbs.on("click", "a", function (e) {
    e.preventDefault();
    var big = $(this).attr("href");
    $lbImg.attr("src", big);
    $lb.attr("data-state", "visible");
});

$btnClose.on("click", function () {
    $lb.attr("data-state", "hidden");
});

$tabs.on("click", "a", function (e) {
    e.preventDefault();
    var id = $(this).attr(".href");
});

$('.nav').localScroll();