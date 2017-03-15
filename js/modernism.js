/**
 * Copyright (c) 2017
 */

 function inflate() {
   $('#main').addClass("header");
   $('#main').removeClass("bg-inverse");
   $('.header-inner').remove Class("bg-inverse");
   $('.nav-com').removeClass("pt-3 pb-3");
   $('#mainNavigation').addClass("justify-content-end");
   $('#mainNavigation').removeClass("justify-content-center");
   $('.navbar-brand.brand').show();
 }

 function deflate() {
   $('#main').removeClass("header");
   $('#main').addClass("bg-inverse");
   $('.header-inner').addClass("bg-inverse");
   $('.nav-com').addClass("pt-3 pb-3");
   $('#mainNavigation').removeClass("justify-content-end");
   $('#mainNavigation').addClass("justify-content-center");
   $('.navbar-brand.brand').hide();
 }

/**
 * Source: https://jsfiddle.net/cse_tushar/Dxtyu/141/
 * Start -->
 */

 $(document).ready(function () {
    $(document).on("scroll", onScroll);

    // Smooth Scrolling
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('nav-com-active');
        })
        $(this).addClass('nav-com-active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 250, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

var isDeflated = false;

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    console.log(scrollPos);
    if (scrollPos < 50) {
      if (isDeflated) {
        inflate();
        isDeflated = false;
        console.log("Inflating navbar");
      }
    } else {
      if (!isDeflated) {
        deflate();
        isDeflated = true;
        console.log("Deflating navbar");
      }

    }
    $('#mainNavigation a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#mainNavigation a').removeClass("nav-com-active");
            currLink.addClass("nav-com-active");
        }
        else{
            currLink.removeClass("nav-com-active");
        }
    });
}

/**
 * <-- End
 */

var quiz = {};

quiz.questions = {
  1:"During what span of time did Modernism take place?",
  2:"Which of the following authors are iconic for Modernism?"
};

/**
 * Quiz question types
 * 0: multiple option
 * 1: multiple choice
 */

quiz.types = {
  1:0,
  2:1
};

quiz.answers = {
  1:["1500 - 1660", "1660 - 1790", "1790 - 1830", " 1830 - 1901", "1901 - 1945"],
  2:["J. R. R. Tolkien", "Ernest Hemingway", "William Shakesphere"]
};

// Prevent cheating by sending answers to another secret script to check for answers.

console.log(quiz);
console.log(quiz.questions.question);
