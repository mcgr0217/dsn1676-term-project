var $thumbs = $(".thumbnails");
var $lbImg = $(".lightbox-img");
var $lb = $(".lightbox");

$thumbs.on("click", "a", function (e) {
    e.preventDefault();
    var big - $(this).attr("href");
    $lbImg.attr("src", big);
    $lb.attr("data-state", "visible");
})