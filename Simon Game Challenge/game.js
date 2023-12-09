//At the top of the game.js file, create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow" .
var buttonColours=["red", "blue", "green", "yellow"];

var userClickedPattern=[];
//create a new empty array with name gamePattern
var gamePattern=[];
 var level=0;
 var started=false;


 $(document).keypress(function () {
    if(!started){
        $("#level-title").text("Level "+ level);
        nextSequence();
        started=true;

    }
    
    
});




$(".btn").click(function(){
    var userChosenColour= $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    //console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour)
    checkAnswer(userClickedPattern.length-1);

})

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] ===userClickedPattern[currentLevel]){
        console.log("success");
        if(userClickedPattern.length===gamePattern.length){
            setTimeout(function() { 
                nextSequence(); 
            }, 1000);
        }
    }
    else{
        console.log("wrong");
        playSound("wrong");

        $("body").addClass("game-over");
        setTimeout(function() { 
            $("body").removeClass("game-over"); 
        }, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();

    }


}
//create a new function nextSequence to  take a random number from 0 to 3
function nextSequence(){
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level "+ level);
    var randomNumber=Math.random()*4;
    randomNumber=Math.floor(randomNumber);
    //create a variable random chosen colour and give the value of random number to array buttonColours
var randomChosenColour=buttonColours[randomNumber];
///add the randomchosen number in the empty array
gamePattern.push(randomChosenColour);

//to select the id with randomChosenColour
$("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColour);

}
function playSound(name){
    var audio = new Audio("sounds/"+ name + ".mp3");
    audio.play();
}
function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed").delay(100).removeClass("pressed");
    // setTimeout(function () {
    //     $("#" + currentColor).removeClass("pressed");
    //   }, 100);
}






function startOver(){
    level=0;
    gamePattern=[]; 
     started=false;

}