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
