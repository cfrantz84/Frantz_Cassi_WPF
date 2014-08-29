// Functions - Wacky

//How prepared are you for a kids party?

var games = prompt("How many games will there be?");
if(games < 3){
	alert("You might want to rethink that...")
}else{
}
var cake = prompt("How many pieces of cake will there be?");
var kids = prompt("How many kids will be there?");

function happy(){
	var happy = cake * 2;
}
happy;

if(happy * 2 > kids){
	alert("You are prepared!")
	console.log("You are prepared!")
}else{
	alert("There will be screaming. Possibly things thrown... at you.")
	console.log("Try again.")
}