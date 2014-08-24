// Conditionals_Industry

// Are you making more than average pay for a web designer?
var hourlyPay = prompt("How much are you making per hour? Format 00.00");
if(""){
	prompt("You forgot to put something!")
}else{
}
var hoursWorked = prompt("How many hours do you work per week?");
if(""){
	prompt("You forgot to put something!")
}else{
}

//
if(hourlyPay * hoursWorked * 4 * 12 > 63549){
	alert("You are making more than average pay!")
	console.log("You are making more than average pay!");
}else{
	alert("You are making less than average pay.")
	console.log("You are making less than average pay.");
}