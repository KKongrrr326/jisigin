
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

jQuery(document).ready(function ($) {

    /* a 태그 경로 제거 */
    $('a[href="#"]').click(function (e) {
        e.preventDefault();
    })

    var fixed_head = 85;
    $(window).scroll(function () {
        var window = $(this).scrollTop();
        if (fixed_head <= window) {
            $("header").addClass("fixed");
        } else {
            $("header").removeClass("fixed");
        }
    });

});