//Conditional Logic - Logical Operators

var budget = 300;
var iPhonePrice = 199.99;
var wonLottery = true;

//if the price of the phone is less our budget AND if our paycheck is over 300
if(iPhonePrice < budget || wonLottery === true){
	console.log("We can buy the phone!")	
}else{
	console.log("No phone for you!")
}
