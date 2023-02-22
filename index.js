$(function () {
    $(window).scroll(function () {
        const windowHeight = $(window).height();
        const scroll = $(window).scrollTop();

        $('.element').each(function () {
            const targetPosition = $(this).offset().top;
            if (scroll > targetPosition - windowHeight + 100) {
                $(this).addClass("is-fadein");
            }
        });
    });
});

const CLASSNAME = "-visible";
const TIMEOUT = 1500;
const $target = $(".title");

setInterval(() => {
    $target.addClass(CLASSNAME);
    setTimeout(() => {
        $target.removeClass(CLASSNAME);
    }, TIMEOUT);
}, TIMEOUT * 2);