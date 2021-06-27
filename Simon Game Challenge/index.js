  var gamePattern = [];
  var buttonColors = ["red", "blue", "green", "yellow"];
  var userClickedPattern = [];
  var randomChosenColour;
  var level = 0;
  var started = false;

  $(document).on("keypress", function() {
  if (!started) {

    // $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

  $(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
  playSound(userChosenColour);
  animatePress($(this));
});

  function animatePress(currentColour) {

    currentColour.addClass("pressed");
    setTimeout( function (){
      currentColour.removeClass("pressed");
    }, 100);
}

  function nextSequence() {

  userClickedPattern = [];
  ++level;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  randomChosenColour = buttonColors[randomNumber];
  gamePattern.push(randomChosenColour);
  console.log(gamePattern);
  $("#"+ randomChosenColour).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

  function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

 function checkAnswer(currentLevel) {
  if(gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if(userClickedPattern.length === gamePattern.length) {
      setTimeout( function (){
        nextSequence();
      }, 1000);
    }
  }
  else {
    playSound("wrong");
    $("#level-title").text("Game Over, Press Any Key to Restart");
    $("body").addClass("game-over");
    setTimeout( function (){
      $("body").removeClass("game-over");
    }, 100);
    startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}

$(".btn").on("click", function(){
  checkAnswer(userClickedPattern.length - 1);
});
