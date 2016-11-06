$(document).ready(function () {
    var $mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        spaceBetween: 30
    });

    function remove()  {
        var $confirm = $('.confirm');
        var $reject = $('.reject');
        if ($('.swiper-slide').hasClass('swiper-slide-active')){
            $confirm.on('click', function() {
               $(this).parent().parent().remove();
               $("div.background>div:first-child").remove();
            });
            $reject.on('click', function() {
                $(this).parent().parent().remove();
                $("div.background>div:first-child").remove();
            });
        }
    }
    remove()
});