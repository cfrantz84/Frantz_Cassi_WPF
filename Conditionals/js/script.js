//Conditional Logic

var kidHeight = 47;
var minHeight = 48;
var sneakerLift = 2;

//if child is old enough, printo to the console "you can ride"
//if the kid is over 48 inches in height
if(kidHeight + sneakerLift > minHeight){
	//code performed if condition is true
	console.log("You can ride the coaster!");
}
if(kidHeight <= minHeight){
	console.log("Sorry kid, you're got some growing to do first!");
}
