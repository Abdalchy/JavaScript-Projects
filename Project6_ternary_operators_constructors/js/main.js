function Ride_Function(){ // Create Function
	var Height, Can_ride;
	Height = document.getElementById("Height") .value;
	Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
	document.getElementById("Ride") .innerHTML = Can_ride + " to ride.";
}

function Vote_Function(){  //Create functon
	var Age, Can_Vote;  //assign variables
	Age = document.getElementById("Age") .value;  //Get value for age
	Can_Vote = (Age < 18) ? "You are NOT of legal age":"You ARE of legal age";  //compare age
	document.getElementById("Vote") .innerHTML = Can_Vote + " to vote.";  // answer
}

//Keywords
function Vehicle(Make, Model, Year, Color) { // Create function
	this.Vehicle_Make = Make;
	this.Vehicle_Model = Model;
	this.Vehicle_Year = Year;
	this.Vehicle_Color = Color;
}
var Jack = new Vehicle ("Dodge", "Viper", 2020, "Red"); // Assign variable
var Emily = new Vehicle ("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle ("Ford", "Pinto", 1971, "Mustard");
function function1() {
	document.getElementById("Keywords_and_Constructors") .innerHTML = "Erik drives a " + Erik.Vehicle_Color + " colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}
function Pizza (Size, Crust, Sauce, Meat, Veggie) {
    this.Pizza_Size= Size;
    this.Pizza_Crust= Crust;
    this.Pizza_Sauce= Sauce;
    this.Pizza_Meat= Meat;
	this.Pizza_Veggie= Veggie;
}
var Bill = new Pizza("Large", "Thin Crust", "BBQ sauce", "Chicken", "Peppers"); //new values
var Tom = new Pizza("Medium", "Deep Dish", "Pizza sauce", "Ham", "Pinapple");
function function2() {
    document.getElementById("New_and_This") .innerHTML =
    "Bill enjoys a " + Bill.Pizza_Size + " " + Bill.Pizza_Crust + 
    " Pizza with " + Bill.Pizza_Sauce + ", " + Bill.Pizza_Meat + " and " + Bill.Pizza_Veggie +
    ".";
}
/*function Challenge9_Function(){ //Unexpected keyword error
	var true, variable;
	true = document.getElementById("true") .value;
	variable = (true == yes) ? "Reserved variable";
	document.getElementById("Challenge9") .innerHTML = variable + " yes ";
}*/
//NESTED FUNCTION
function Function2() { // Create function 
    document.getElementById("Nested_Function").innerHTML = add(); // Call the function
    function add() { // Create nested add() function
        var counter = 10; // Set counter variable
        function plus() {counter += 1;} // function to plus 1
        plus();
        return counter; // Return Value
    }
}