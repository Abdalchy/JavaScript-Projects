// JavaScript Document

function addition() { /*create function*/
    var math1 = 2 + 2; /*set variable*/
    document.getElementById("math").innerHTML = "2 + 2 = " + math1; /*call value*/
}

function subtraction() { /*create function*/
    var math2 = 5 - 2; /*set variable*/
    document.getElementById("math2").innerHTML = "5 - 2 = " + math2; /*call value*/
}

function multiplication() { /*create function*/
    var math3 = 6 * 8; /*set variable*/
    document.getElementById("math3").innerHTML = "6 * 8 = " + math3; /*call value*/
}

function division() { /*create function*/
    var math4 = 48 / 6; /*set variable*/
    document.getElementById("math4").innerHTML = "48 / 6 = " + math4; /*call value*/
}

function multipleOperators() { /*create function*/
    var math5 = (5 + 3) * 10 / 18; /*set variable*/
    document.getElementById("math5").innerHTML = "(5 + 3) * 10 / 18 = " + math5; /*call value*/
}

function modulusOperator() { /*create function*/
    var math6 = (25 % 6); /*set variable*/
    document.getElementById("math6").innerHTML = "25 % 6 r= " + math6; /*call value*/
}

function negationOperator() { /*create function*/
    var x = 10; /*set variable*/
    document.getElementById("math7").innerHTML = "The negation of " + x + " is " + -x; /*call value*/
}

function increment() { /*create function*/
    var a = 5; /*set variable*/
    a++;
    document.getElementById("math8").innerHTML = "5 incremented once is " + a; /*call value*/
}

function decrement() { /*create function*/
    var b = 5.25; /*set variable*/
    b--;
    document.getElementById("math9").innerHTML = "5.25 decremented once is " + b; /*call value*/
}

function random1() { /*create function*/
	document.getElementById("math10").innerHTML = (Math.random()); /*call value*/
}

function random2() { /*create function*/
    document.getElementById("math11").innerHTML = (Math.random() * 100); /*call value*/
}

function arithmetic() { /*create function*/
	var c = 5; /*set variable*/
	var d = (25+50) * c; /*set variable*/
    document.getElementById("math12").innerHTML = "The calculation of the arithmetic operation is " + d; /*call value*/
}

