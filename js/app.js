$(document).foundation();
$("document").ready(function($){
    var navFirst = $('.header-first');
    var navSecond = $('.header-second');
    var navThird = $('.header-third');
    var navLogo = $('#logo');
    var date = $('.date');
    var authSecondHeader = $('#auth-second-header')
    var offCanvas = $('#offCanvasRightOverlap');
    var canvasToggler = $("#canvas-toggler");

        $(window).scroll(function () {
            if(window.matchMedia('(min-width: 1024px)').matches) {
                if ($(this).scrollTop() > 158) {
                    navSecond.addClass("f-header-second");
                    navSecond.css("padding", "0 0 0 15px")
                    navLogo.addClass("logo-collapse")
                    navThird.addClass("hide");
                    date.addClass("hide");
                    canvasToggler.removeClass("hide-for-large");
                    offCanvas.removeClass("hide-for-large");
                    offCanvas.css("top", "2.405rem");
                } else {
                    navSecond.removeClass("f-header-second");
                    navSecond.removeAttr("style")
                    navLogo.removeClass("logo-collapse")
                    navThird.removeClass("hide");
                    date.removeClass("hide");
                    canvasToggler.addClass("hide-for-large");
                    offCanvas.addClass("hide-for-large");
                    offCanvas.css("top", "4.60625rem");
                }
                
            } else {
                if ($(this).scrollTop() > 73) {
                    navSecond.addClass("f-header-second");
                    navFirst.addClass("hide")
                    offCanvas.css("top", "2.405rem");
                    authSecondHeader.css("display", "flex")
                } else {
                    navFirst.removeClass("hide");
                    navSecond.removeClass("f-header-second")
                    offCanvas.css("top", "4.60625rem");
                    authSecondHeader.removeAttr("style")
                }
            };
        });
    

    $(canvasToggler).click(function () {
        if(!$(".fa-bars").hasClass("hide")) {
            $(".fa-bars").addClass("hide");
            $(".fa-times").removeClass("hide");
            $(canvasToggler).css("background-color", "black");
        } else {
            $(".fa-bars").removeClass("hide");
            $(".fa-times").addClass("hide");
            $(canvasToggler).css("background-color", "#f72210")
        }
    });
});
