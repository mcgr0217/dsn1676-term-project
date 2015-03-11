var $tabs = $(".tabs");
var $panel = $(".panel");
    
$tabs.on("click", "a", function (e) {
    e.preventDefault();
    var id = $(this).attr(".href");
    console.log(id);
});