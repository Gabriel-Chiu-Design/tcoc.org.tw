$(document).ready(function () {
    //side-menu
    $(".header .side-menu-logo").click(function (e) { 
        e.preventDefault();
        $(".side-menu").toggleClass("active");
        $(".overlay").toggleClass("active");
    });
    
    $(".overlay").click(function (e) { 
        e.preventDefault();
        $(".side-menu").toggleClass("active");
        $(".overlay").toggleClass("active");
    });

    $(".side-menu .logo-section .arrow").click(function (e) { 
        e.preventDefault();
        $(".side-menu").toggleClass("active");
        $(".overlay").toggleClass("active");
    });

    $(".side-menu li a").click(function (e) { 
        $(".side-menu").toggleClass("active");
        $(".overlay").toggleClass("active");
    });
});