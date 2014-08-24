// Conditionals_Wacky

// How old are you?
var yearBorn = prompt("In what year were you born?")
if(""){
	prompt("You forgot to put something!")
}else{
}
var yearCurrent = prompt("What is the current year?")
if(""){
	prompt("You forgot to put something!")
}else{
}

//Are you still alive?
if(yearCurrent - yearBorn < 100){
	alert("It is quite possible that you are still alive!")
	alert("In case I forget:")
	alert("Happy Birthday to you! Happy Birthday to you! You look like a monkey, and you smell like one too!")
	console.log("It is quite possible that you are still alive!");
}else{
	alert("That is not possible!")
	alert("Unless you are a vampire...")
	console.log("That is not possible!");
}