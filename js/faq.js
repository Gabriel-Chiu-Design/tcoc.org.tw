$(document).ready(function () {

    $(".question").click(function (e) { 
        $(this).toggleClass("active");
        $(this).parent().siblings().find(".question").removeClass("active")

        $(this).find(".text").toggleClass("active");
        $(this).parent().siblings().find(".text").removeClass("active");

        $(this).find(".arrow").toggleClass("active");
        $(this).parent().siblings().find(".arrow").removeClass("active");

        $(this).find(".q-mark").toggleClass("active");
        $(this).parent().siblings().find(".q-mark").removeClass("active");

        $(this).parent().find(".answer").toggleClass("active");
        $(this).parent().siblings().find(".answer").removeClass("active");
    });
});