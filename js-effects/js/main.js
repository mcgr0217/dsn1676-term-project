var $thumbs = $(".thumbnails");
var $lbImg = $(".lightbox-img");
var $lb = $(".lightbox");
var $btnClose = $(".btn-close");
var $tabs = $(".tabs");
var $panel = $(".panel");
var $arrow = $(".arrow");

$thumbs.on("click", "a", function (e) {
    e.preventDefault();
    var big = $(this).attr("href");
    $lbImg.attr("src", big);
    $lb.attr("data-state", "visible");
});

$btnClose.on("click", function () {
    $lb.attr("data-state", "hidden");
});

$tabs.on("click", "a", function () {
    var id = $(this).attr(".href");
});

$('.nav').localScroll();

$('.bar').localScroll();

$('.services').localScroll();

$arrow.waypoint(function () {
    $arrow.toggleClass("js-active");
}, { offset: "30%" } );