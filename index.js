
// Put your JavaScript in this file.

'use strict';   // Enable "strict mode".  Note: This *must* be the first statement in the script.
                // See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

// create global variables for the buttons so that you can assign a listener
var mySubmitButton = document.getElementById("SubmitButton");
//var myShowIndexButton = document.getElementById("showIndexButton");
//var myChangeTextButton = document.getElementById("changeTextButton");

// global array of questions and answers. No extra field for storing the index of the correct answer needed.
var correct_answers = [[1, 1],[2, 0],[3,2],[4,1],[5,1]];

// global array of questions and answers.  In my example below, I include an extra field at the end storing the index of the correct answer
// var questions = [["Which house would you like to be sorted into?",["Slytherin, of course!", "Ravenclaw - 'wit beyond measure is a man's greatest treasure'!", "GRYFFINDOR!!!", "Not Slytherin, not Slytherin, not Slytherin...!!!","Hufflepuff, please..!","Gryffindor, although Ravenclaw would be absolutely fascinating!","I don't care!"],0], ["What is your favorite team",["Red Sox", "Yanks", "Tigers"],2]];

//var myQuestion1 = document.getElementById("Question1");

// Load the question part of the first question in the array
// myQuestion1.innerHTML = questions[0][0];

var myAudio;
myAudio=new Audio ("Canon in D.mp3");
myAudio.play();
var myForm = document.getElementById("myAnswers1");
// we use var i as counter for the number of answers in a question
var i;
// we use variable n as counter for the questions; we currently have 4 questions
var n;
// we used variable questions_answered for the number of questions answered
var questions_answered = 0;
//we use variable counter as index variable for our score array
var no_correct_answers = 0;
// we use variable max to keep the maximum score
// var max;
// we use variable name to store the name corresponding to the maximum score
//var name;
var r;

// Button listener
myCheckButton.addEventListener('click', function(e)
{
    // for every question of the form, get the answers
    for (n = 1; n < 6; n ++)
    {
    var myForm = document.getElementById("myAnswers" + n);
    var i=0;  // iterate through the array of answers
    var radioCheck = false;  // boolean to denote whether or not the user clicked on any of the radio buttons

    // loop through all answers and compare every answer against the correct answer in the correct_answers array
    for (i=0; i<myForm.answer.length; i++)
    {
      if (myForm.answer[i].checked == true)
      {
        if(i==correct_answers[n-1][1])
        {
          no_correct_answers = no_correct_answers + 1;
          console.log("you picked the right answer for question " + n);
        }
            radioCheck = true;
        questions_answered = questions_answered + 1;
      }
    }
   }
    // check to see if all questions have been answered
    if (questions_answered < 5)
    lastMessage.innerHTML = "You have not answered all the questions! Please finish the quiz."
     else
    {
      // we want to hide all of the 4 divisions in which the questions and answers are displayed
      // we hide them by setting their display to "none"

      for(r=1; r<6; r++)
        {
        var x = document.getElementById("Question" + r);
        x.style.display = "none";
        }
        // we are ready to reveal/unhide the division with the results
        var x = document.getElementById("Display-Result");
        x.style.display = "block";
        // oh, we want to hide that "check" button as well
        var y = document.getElementById("myCheckButton");
        y.style.display = "none";
        lastMessage.innerHTML = "You answered correctly " + no_correct_answers + " questions out of 5";
    }
});
