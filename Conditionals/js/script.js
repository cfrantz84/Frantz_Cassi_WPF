//Conditional Logic - else if

var kidHeight = 47;
var minHeight = 48;
var wParentHeight = 45; //the height of the kid with parent

//if child is old enough, printo to the console "you can ride"
//if the kid is over 48 inches in height
if(kidHeight + sneakerLift > minHeight){
	//code performed if condition is true
	console.log("You can ride the coaster!");
}else if (kidHeight > wParentHeight){
	//you can ride with a parent present
	console.log("You can ride, but only with a parent present.");
}else{
	//sorry you have growing to do
	console.log("Sorry kid, you're got some growing to do first!");
}
	