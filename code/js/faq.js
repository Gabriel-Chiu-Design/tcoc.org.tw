$(document).ready(function () {

    $(".question.q1").click(function (e) { 
        $(".faq-list .answer-1").toggleClass("active");
        $(".question.q1 .text").toggleClass("active");
        $(".question.q1").toggleClass("active");
        $(".question.q1 .arrow").toggleClass("active");
    });

    $(".question.q2").click(function (e) { 
        $(".faq-list .answer-2").toggleClass("active");
        $(".question.q2 .text").toggleClass("active");
        $(".question.q2").toggleClass("active");
        $(".question.q2 .arrow").toggleClass("active");
    });

    $(".question.q3").click(function (e) { 
        $(".faq-list .answer-3").toggleClass("active");
        $(".question.q3 .text").toggleClass("active");
        $(".question.q3").toggleClass("active");
        $(".question.q3 .arrow").toggleClass("active");
    });

    $(".question.q4").click(function (e) { 
        $(".faq-list .answer-4").toggleClass("active");
        $(".question.q4 .text").toggleClass("active");
        $(".question.q4").toggleClass("active");
        $(".question.q4 .arrow").toggleClass("active");
    });

});