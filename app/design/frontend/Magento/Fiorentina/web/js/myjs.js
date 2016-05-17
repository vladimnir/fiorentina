jQuery.noConflict();

jQuery(document).ready(function($){
   var hW = jQuery(".wrapper").height();
    var hP = $(".page").height();
    if (hP < hW) {
        var fix = hW - hP;
        var containH = $('.main-container').outerHeight();
        $('.main-container').css("min-height", fix + containH);
    }
    jQuery(window).on('resize', function () {
        var hW = $(".wrapper").height();
        var hP = $(".page").height();
        if (hP < hW) {
            var fix = hW - hP;
            var containH = $('.main-container').outerHeight();
            $('.main-container').css("min-height", fix + containH);
        }
    });
});