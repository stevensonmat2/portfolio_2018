$(document).on('click', '.button', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
});
$(document).on('click', '.up', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
});
(function () {

    var parallax = document.querySelectorAll("body"),
        speed = 0.5;

    window.onscroll = function () {
        [].slice.call(parallax).forEach(function (el, i) {

            var windowYOffset = window.pageYOffset,
                elBackgrounPos = "50% " + (windowYOffset * speed) + "px";

            el.style.backgroundPosition = elBackgrounPos;

        });
    };

})();


$(document).ready(function () {
    resize()
//    $("html, body").animate({ scrollTop: 100 }, 100);
});

$(window).resize(function () {
    resize()
});

function resize() {
    var divH = $(window).innerHeight();
    $(".mydiv").height(divH);
};
