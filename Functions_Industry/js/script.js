// Functions - Industry

//Calculate profit from web sites.

var revenueEarned = prompt("How much revenue did your site generate last month?");
var revenueSpent = prompt("How much of the the earned revenue was spent on advertising, development, etc?");

function profit (){
	var profit = revenueEarned - revenueSpent;
	return profit;
}
profit(revenueEarned - revenueSpent);

//Must meet goal of 2000 to create new site.
if(profit > 2000){
	console.log("You can make a new site!");
}else{
	console.log("You did not make enough money this month.");
}