var $thumbs = $(".thumbnails");
var $lbImg = $(".lightbox-img");
var $lb = $(".lightbox");
var $btnClose = $(".btn-close");
var $tabs = $(".tabs");
var $panel = $(".panel");

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

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});