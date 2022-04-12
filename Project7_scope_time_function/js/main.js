var a = 10; // Assign local variable
function function1() {
	document.write(20 + a + '<br>');
}
function function2() {
	document.write(a + 100 + '<br>');
}
function1 ();
function2 ();

function function3() {
	var b = 10; // Assign global variable
	document.write(20 + b + '<br>');
}
function function4() {
	document.write(b + 100 + '<br>');
}
function3 ();
function4 (); //will not print as global variable

/*function function5() {
	var c = 10; // Assign global variable
	console.log(15 + c);
}
function function6() {
	console.log(c + 100); //debug in console
}
function5 ();
function6 ();*/

function get_Date() {
    if (new Date().getHours() < 16) { //Will only display before 4:00pm
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function Age_Function() { //Create function
	Age = document.getElementById("Age") .value; 
	if (Age >=18) { //If 18 or over
		Vote = "You are old enough to vote!";
	}
	else {
		Vote = "You are not old enough to vote!";
	}
	document.getElementById("How_old_are_you?") .innerHTML = Vote; // Display outcome based on age entered
}

function Time_function() {  // Create functionfunction
    var Time= new Date().getHours(); // Assigning value to variable
    var Reply; 
    if (Time < 12 == Time > 0) { // If Midnight to noon display a message
        Reply = "It is not time to get up yet!";// Display with ID Scheduler. 
    }
    else if (Time > 12 == Time < 18) {
        Reply = "Day should be ending soon";
    }
    else {
        Reply ="It is beer oclock!";
    }
    document.getElementById("Scheduler").innerHTML = Reply;
}

