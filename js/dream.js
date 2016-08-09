$(document).ready(function () {
    // Handler for .ready() called.
    $('html, body').animate({
    	scrollTop: $('.music').offset().top - 400
    }, 1000);
});