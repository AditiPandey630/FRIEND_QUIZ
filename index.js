var readlineSync = require("readline-sync")
var score = 0;
var userName = readlineSync.question("What's your name ");
console.log("welcome " + userName + " Let's play F.R.I.E.N.D.S Quiz");

//play
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    console.log("right answer");
    score = score + 1;
  }
  else
    console.log("wrong answer");
}


//array
var questions = [
  {
    question: `
	Joey was never roommate with one of these people?
	a: Ross
	b: Phoebe
	c: Rachel\n`,
    answer: "b"
  },
  {
    question: `
	How did Ross count to 5?
	a: Like a normal person
	b: One Mississippi, Two Mississippi\n`,
    answer: "b"
  },
  {
    question: `
	Who said, "It's a Moo Point"?
	a: Joey
	b: Chandler
	c: Ross
	d: Monika\n`,
    answer: "a"
  },
  {
    question: `
	What's Ichiban?
	a: Bag for men
	b: Lipstick for men
	c: Winner's cup\n`,
    answer: "b"
  }];

//loop
for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}
console.log("yay! you scored " + score + " out of 4");
console.log("--------------");