// JavaScript Document

function addition() {
    var math1 = 2 + 2;
    document.getElementById("math").innerHTML = "2 + 2 = " + math1;
}

function subtraction() {
    var math2 = 5 - 2;
    document.getElementById("math2").innerHTML = "5 - 2 = " + math2;
}

function multiplication() {
    var math3 = 6 * 8;
    document.getElementById("math3").innerHTML = "6 * 8 = " + math3;
}

function division() {
    var math4 = 48 / 6;
    document.getElementById("math4").innerHTML = "48 / 6 = " + math4;
}

function multipleOperators() {
    var math5 = (5 + 3) * 10 / 18;
    document.getElementById("math5").innerHTML = "(5 + 3) * 10 / 18 = " + math5;
}

function modulusOperator() {
    var math6 = (25 % 6);
    document.getElementById("math6").innerHTML = "25 % 6 r= " + math6;
}

function negationOperator() {
    var x = 10;
    document.getElementById("math7").innerHTML = "The negation of " + x + " is " + -x;
}

function increment() {
    var a = 5;
    a++;
    document.getElementById("math8").innerHTML = "5 incremented once is " + a;
}

function decrement() {
    var b = 5.25;
    b--;
    document.getElementById("math9").innerHTML = "5.25 decremented once is " + b;
}

function random1() {
	document.getElementById("math10").innerHTML = (Math.random());
}

function random2() {
    document.getElementById("math11").innerHTML = (Math.random() * 100);
}

function arithmetic() {
	var c = 5;
	var d = (25+50) * c;
    document.getElementById("math12").innerHTML = "The calculation of the arithmetic operation is " + d;
}

