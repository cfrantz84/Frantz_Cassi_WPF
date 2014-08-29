// Functions-Personal

//Calculate weight loss

var currentWeight = prompt("What is your current weight?");
var startingWeight = prompt("What was your starting weight?");

function calcWeight (){
	var weightLost = (startingWeight - currentWeight);
	console.log("You have lost " + weightLost + " pounds!");
}
calcWeight();

