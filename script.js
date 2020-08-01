$(document).ready(function(){
	
  
var magic8ball = {};
magic8ball.answers = ["yes", "no", "maybe", "don't count on it", "not likely", "ask again", "are you nuts?"];

  
magic8ball.askQuestion = function(question) {
  
  $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
  
	var randomNumber = Math.random();
 
	var randomNumberArray = randomNumber * this.answers.length;
 
	var randomIndex = Math.floor(randomNumberArray);
 
	var randomAnswer = this.answers[randomIndex];
  
  
	 console.log(question);
  
   console.log(randomAnswer);
	
	$("#answer").text(randomAnswer);
   $("#answer").fadeIn(4000);
};

var onClick = function () {
  $("#8ball").effect( "shake" );
		$("#answer").hide();
  $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
  
	setTimeout(
     function() {
        var question = prompt ("Ask a yes or no question");
	      magic8ball.askQuestion(question)
     }, 500);
  
}; 
  
	$("#questionButton").click(onClick);

	
});

