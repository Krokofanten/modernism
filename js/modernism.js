/**
 * Copyright (c) 2017
 */

$('#secondary').hide();
 $(document).scroll(function() {
   var y = $(this).scrollTop();
   if (y > 75) {
     $('#secondary').fadeIn("fast");
   } else {
     /*$('#secondary').animate({
        left: "+=50"
      }, 5000, function() {
        // Animation complete.
      });*/
     $('#secondary').fadeOut("fast");
   }
 });

 $(document).ready(function () {
    $(document).on("scroll", onScroll);

    //smoothscroll
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
            'scrollTop': $target.offset().top()+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#secondary-sections a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#secondary-sections a').removeClass("nav-com-active");
            currLink.addClass("nav-com-active");
        }
        else{
            currLink.removeClass("nav-com-active");
        }
    });
}

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
