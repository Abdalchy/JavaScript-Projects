/*function  my_Dictionary() {
	var Standings = {
		First:"Brazil",
		Second:"Belgium",
		Third:"France",
		Fourth:"Argentina",
		Fifth:"England"
	};
	document.getElementById("Dictionary") .innerHTML = Standings.First;
}*/

/*Challenge 5 duplicate keys error*/
/*function  my_Dictionary1() {
	var Standings = {
		First:"Brazil",
		First:"Belgium",
		Third:"France",
		Fourth:"Argentina",
		Fifth:"England"
	};
	document.getElementById("Dictionary") .innerHTML = Standings.First;
}*/

function  my_Dictionary2() {
	var Standings = {
		First:"Brazil",
		Second:"Belgium",
		Third:"France",
		Fourth:"Argentina",
		Fifth:"England"
	};
	delete Standings.First;
	document.getElementById("Dictionary") .innerHTML = Standings.First;
}