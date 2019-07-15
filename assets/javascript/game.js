var trivia = [
          { question : "What is the largest continent of the world?",
            options : ["Europe", "Australia", "North America", "Asia"],
            answer : "Asia"
          },
          {
            question : "What is the largest ocean of the world?",
            options : ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Southern Ocean"],
            answer : "Pacific Ocean"    
          },
          {
            question : "How many bones are there in a human body?",
            options : ["118 bones", "116 bones", "203 bones", "206 bones"],
            answer : "206 bones"    
          },
          {
            question : "Which city is known as the \"City of Love\"?",
            options : ["Venice", "Rome", "Paris", "Antibes"],
            answer : "Paris"    
          },
          {
            question : "How many countries are the members of the United Nations?",
            options : ["193", "195", "190", "116"],
            answer : "193"    
          },
          {
            question : "How many years are there in a century?",
            options : ["1 year", "10 years", "100 years", "1000 years"],
            answer : "100 years"    
          }
        ],
    userAnswer = [],

    correctAnswers = 0,
    incorrectAnswers = 0,
    unanswered = 0,
    timer = "0:30";

$('#correct').text(correctAnswers);
$('#incorrect').text(incorrectAnswers);
$('#unanswered').text(unanswered);
$('#timer-countdown').text(timer);

//Displaying all the questions and options
//Question #1
$('#question-0').html('<p>' + trivia[0].question + '</p>');
//Options for Question #1
for(let x = 0; x < trivia[0].options.length; x++){
  $('#options-0').append(
    "<input type='radio' name='choices-0' id='radio-one' class='form-radio' value='"+ trivia[0].options[x] +"'>" + "<label>" + trivia[0].options[x] + "</label>"
  );
}

//Question #2
$('#question-1').html('<p>' + trivia[1].question + '</p>');
//Options for Question #2
for(let x = 0; x < trivia[1].options.length; x++){
  $('#options-1').append(
    "<input type='radio' name='choices-1' id='radio-one' class='form-radio' value='"+ trivia[1].options[x] +"'>" + "<label>" + trivia[1].options[x] + "</label>"
  );
}

//Question #3
$('#question-2').html('<p>' + trivia[2].question + '</p>');
//Options for Question #3
for(let x = 0; x < trivia[2].options.length; x++){
  $('#options-2').append(
    "<input type='radio' name='choices-2' id='radio-one' class='form-radio' value='"+ trivia[2].options[x] +"'>" + "<label>" + trivia[2].options[x] + "</label>"
  );
}

//Question #4
$('#question-3').html('<p>' + trivia[3].question + '</p>');
//Options for Question #4
for(let x = 0; x < trivia[3].options.length; x++){
  $('#options-3').append(
    "<input type='radio' name='choices-3' id='radio-one' class='form-radio' value='"+ trivia[3].options[x] +"'>" + "<label>" + trivia[3].options[x] + "</label>"
  );
}

//Question #5
$('#question-4').html('<p>' + trivia[4].question + '</p>');
//Options for Question #5
for(let x = 0; x < trivia[4].options.length; x++){
  $('#options-4').append(
    "<input type='radio' name='choices-4' id='radio-one' class='form-radio' value='"+ trivia[4].options[x] +"'>" + "<label>" + trivia[4].options[x] + "</label>"
  );
}

//Question #6
$('#question-5').html('<p>' + trivia[5].question + '</p>');
//Options for Question #6
for(let x = 0; x < trivia[5].options.length; x++){
  $('#options-5').append(
    "<input type='radio' name='choices-5' id='radio-one' class='form-radio' value='"+ trivia[5].options[x] +"'>" + "<label>" + trivia[5].options[x] + "</label>"
  );
}

//a function for the countdown timer
function countdown(){
  //splitting the current time in 2
  var currentTime = $('#timer-countdown').text().split(/[:]+/);
  
  //minute
  var minute = currentTime[0];

  //second with a function to check the display value
  var second = checkSecond(currentTime[1]-1);
  
  //if the second is equal to 59, the minute will decrement to 1
  if(second == 59){
    minute--;
  }

  //displaying the current timer
  document.getElementById('timer-countdown').innerHTML =
  minute + ":" + second;
  
  if(minute == 0 && second == 00){
    clearTimeout(countdown);
    $('.result-page').fadeIn();
    $('.game-page').fadeOut();
    $('.result-page h2').html("<h2>TIMES UP</h2>")
    checkAnswers()
    gameResult();
  }else{
    setTimeout(countdown, 1000);
  } 
}

//a function to check the second's format
function checkSecond(second) {

  //if the second is less than and greater than/equal to 0
  if (second < 10 && second >= 0) {

    //it will add 0 to the front of the numbers
    second = "0" + second
  }
  
  //if the second is less than 0
  if (second < 0) {

    //the format will be 59
    second = "59"
  }

  return second;
}

// checking answers
function checkAnswers(){

  //variables where the checked values are being held
  var checkUserAnswer0 = $("input[name='choices-0']:checked").val();
  var checkUserAnswer1 = $("input[name='choices-1']:checked").val();
  var checkUserAnswer2 = $("input[name='choices-2']:checked").val();
  var checkUserAnswer3 = $("input[name='choices-3']:checked").val();
  var checkUserAnswer4 = $("input[name='choices-4']:checked").val();
  var checkUserAnswer5 = $("input[name='choices-5']:checked").val();

  // Check Answer for Question 1
  if (checkUserAnswer0 === undefined) {
    unanswered++;
  }
  else if (checkUserAnswer0 !== trivia[0].answer) {
    incorrectAnswers++;
  }
  else {
    correctAnswers++;
  }

  // Check Answer for Question 2
  if (checkUserAnswer1 === undefined) {
    unanswered++;
  }
  else if (checkUserAnswer1 !== trivia[1].answer) {
    incorrectAnswers++;
  }
  else {
    correctAnswers++;
  }

  // Check Answer for Question 3
  if (checkUserAnswer2 === undefined) {
    unanswered++;
  }
  else if (checkUserAnswer2 !== trivia[2].answer) {
    incorrectAnswers++;
  }
  else {
    correctAnswers++;
  }

  // Check Answer for Question 4
  if (checkUserAnswer3 === undefined) {
    unanswered++;
  }
  else if (checkUserAnswer3 !== trivia[3].answer) {
    incorrectAnswers++;
  }
  else {
    correctAnswers++;
  }

  // Check Answer for Question 5
  if (checkUserAnswer4 === undefined) {
    unanswered++;
  }
  else if (checkUserAnswer4 !== trivia[4].answer) {
    incorrectAnswers++;
  }
  else {
    correctAnswers++;
  }

  // Check Answer for Question 6
  if (checkUserAnswer5 === undefined) {
    unanswered++;
  }
  else if (checkUserAnswer5 !== trivia[5].answer) {
    incorrectAnswers++;
  }
  else {
    correctAnswers++;
  }
}

// a function to display the game result
function gameResult(){
  $('#correct').text(correctAnswers);
  $('#incorrect').text(incorrectAnswers);
  $('#unanswered').text(unanswered);
}

$(document).ready(function(){
    //hide these containers by default
    $('.game-page').hide();
    $('.result-page').hide();

    //click event for the start button
    $('#start-btn').on('click', function(){
        $('.start-page').fadeOut();
        $('.game-page').fadeIn();
        countdown();
    });

    //click event for the finish button
    $("#finish-btn").on("click", function() {
      $('.result-page').fadeIn();
      $('.game-page').fadeOut();
      checkAnswers()
      gameResult();
    });
});