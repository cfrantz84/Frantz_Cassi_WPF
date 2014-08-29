// Conditionals_Personal

// How many hours do you need to set aside for an assignment?
var completeTime = prompt("How much time, in minutes, is recommended to complete the assignment?");
if(""){
	prompt("You forgot to put something!")
}else{
}
var prepTime = prompt("How much time, in minutes, is recommended for prep and delivery?");
if(""){
	prompt("You forgot to put something!")
}else{
}
var workTime = prompt("How much time, in minutes, do you have to work on the assignment today?");
if(""){
	prompt("You forgot to put something!")
}else{
}
//Do you have time to finish the assignment today?
if(completeTime + prepTime < workTime){
	alert("You can finish this assignment today!")
	console.log("You can finish this assignment today!");
}else{
	alert("You can not finish this assignment today.")
	console.log("You can not finish this assignment today.");
} 
