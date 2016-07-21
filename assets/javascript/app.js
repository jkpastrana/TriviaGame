$( document ).ready(function(){

var correctAnswer =  0,
	incorrectAnswer=  0,
	unAnswerws=  0,
	pos= 0,
	triviaQuestion= 0,
	choice= 0,
	choices= 0,
	chA= 0,
	chB= 0,
	chC= 0,
	chD= 0,
	chE= 0;

var triviaQuestions = [{
	question: "What is the color of the sky?",
	answers: ["Blue","White","Sky blue", "Colorless"],
	correctAnswer: "Colorless"}, {
	question: "What is the largest ocean?",
	answers: ["Artic", "Atlantic", "Indian", "Pacific"],
  	correctAnswer: "Pacific"}, {
	question: "What is the largest continent?",
	answers: ["Africa", "Antarctica", "Asia", "North America"],
  	correctAnswer: "Asia"}, { 
	question: "Which river does not run from the south to north?", 
	answers: ["Nile", "Saint Johns", "Mississippi", "Little Bighorn"],
  	correctAnswer: "Mississippi"}, {
	question: "Where do penguins live?",
	answers: ["North Pole", "South Pole", "Antarctica", "Southern Hemisphere"],
  	correctAnswer: "Southern Hemisphere"}, { 
	question: "What is the lagest Rain forest?",
	answers: ["Amazon", "Congo", "Daintree", "Valdivian"],
  	correctAnswer: "Amazon"}, { 
	question: "What is the largest desert?",
	answers: ["Arabian", "Gobi", "Antarctic Polar", "Sahara"],
  	correctAnswer: "Antarctic Polar"}, {
	question: "What is the tallest mountain?",
	answers: ["Mount Mckinley", "Mount Kilimanjaro", "Mount Everest", "Mount Elbrus"],
  	correctAnswer: "Mount Everest"}, {
	question: "Which month does Summer end?",
	answers: ["June", "July", "August", "September"],
  	correctAnswer: "August"}, {
	question: "What animale is also known has the Killer whale?",
	answers: ["Sperm whale", "Humpback whale", "Blue whale", "Orca whale"],
 	correctAnswer: "Orca whale"}, {
	question: "Which country looks like a boot?"};]
	answers: ["US", "Africa", "Italy", "Mexico"],
	correctAnswer: "Italy"}]

function gameQuestion(){



}

function startGame(){

	

	gameTimer();

	


}

function endGame(){

//clear questions display and display results display not sure how to do this!!!!


$('totallyTrivia').html("Totally Trivial Trivia!")
$('#done').html("All Done!")
$('#rightAnswer').html("Correct Answers: " + correctAnswer);
$('#wrongAnswer').html("Wrong Answers: " + incorrectAnswer);
$('#noAnswer').html("Unanswered: " + unAnswerws);


	
}

function getQuestion(x){

	return document.getElementById(x);

}

function renderQuestions(){

	trivia = getQuestion("trivia");
	if(pos >= question.length){
		trivia.innerHTML = "<h2>Correct: " + correctAnswer "</h2><br>";
		trivia.innerHTML = "<h2>Wrong: " + incorrectAnswer "</h2><br>";
		trivia.innerHTML = "<h2>Unanswered: " + unAnswerws "</h2><br>";
		getQuestion("trivia_status").innerHTML = "All Done!!";
		pos = 0;
		correctAnswer = 0;
		incorrectAnswer = 0;
		unAnswerws = 0;
		return false;
	}
	getQuestion("questionNumber").innerHTML = "Question: " + triviaQuestions.length;
	triviaQuestion = triviaQuestions [pos][0];
	chA = triviaQuestions [pos][1];
	chB = triviaQuestions [pos][2];
	chC = triviaQuestions [pos][3];
	chD = triviaQuestions [pos][4];
	chE = triviaQuestions [pos][5];

	trivia.innerHTML = "<h3>" + getQuestion + "</h3>";
	trivia.innerHTML += "<input type='radio' name='choices' value='A'>"+chA+"<br>";
	trivia.innerHTML += "<input type='radio' name='choices' value='B'>"+chB+"<br>";
	trivia.innerHTML += "<input type='radio' name='choices' value='C'>"+chC+"<br>";
	trivia.innerHTML += "<input type='radio' name='choices' value='D'>"+chD+"<br>";
	trivia.innerHTML += "<input type='radio' name='choices' value='E'>"+chE+"<br>";	
}

function checkAnswers(){

	choices = document.getElementByName("choices");
	for(var = i; i < choices.length; i++){

		if(choices[i].checked){

			choice = choices[i].value;
		}
	}

	if(choice == triviaQuestions[pos][5]){

		correctAnswer ++;
	}
	else if(choice != triviaQuestions[pos][5]){

		incorrectAnswer ++;
	}
	else{

		unAnswerws ++;
	}
	pos ++;
	renderQuestions();



}





function gameTimer(){

	If(time left){


	}

	else{

		endGame();
	
	}

}

//press start game
$(document.body).on('click', '.buttonStart', function(){
​
	startGame();
​
});



//press submit
$(document.body).on('click', '.buttonEnd', function(){
​
	endGame();
​
});


});