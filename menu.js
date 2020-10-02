$(document).ready(function() {
    // executes when HTML-Document is loaded and DOM is ready
    // breakpoint and up
    $(window).resize(function(){
        if ($(window).width() <= 1000){
            // when you hover a toggle show its dropdown menu
            $(".navbar .dropdown-toggle").hover(function () {
                $(this).parent().toggleClass("show");
                $(this).parent().find(".dropdown-menu").toggleClass("show");
            });
            // hide the menu when the mouse leaves the dropdown
        }
    });
// document ready
});