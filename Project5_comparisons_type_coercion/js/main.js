function function1() { //CReate function
	document.getElementById("Test1") .innerHTML = 0/0;
}
function function2() { //CReate function
	document.getElementById("Test2") .innerHTML = isNaN('This is a string');
}
function function3() { //CReate function
	document.getElementById("Test3") .innerHTML = isNaN('007');
}
function function4() { //CReate function
	document.getElementById("Test4") .innerHTML = 2e310;  //infinite
}
function function5() { //CReate function
	document.getElementById("Test5") .innerHTML = -3e310;  //-infinite
}
function function6() { //CReate function
	document.getElementById("Test6") .innerHTML = 10 > 2;
}
function function7() { //CReate function
	document.getElementById("Test7") .innerHTML = 10 < 2;
}
console.log(25 + 25);  //console log
function function8() { //CReate function
	document.getElementById("Test8") .innerHTML = 'ten' + 10;   //oercion conversion
}
console.log(10 < 2);  //console log
function function9() { //CReate function
	document.getElementById("Test9") .innerHTML = (50 + 40) == 100;  //equal comparison
}
function function10() { //CReate function
	document.getElementById("Test10") .innerHTML = 100 == 100;  //equal comparison
}
var a = "Fifa"; //asign variable
var b = "Fifas"; //asign variable
function function11() {
	document.getElementById("Test11") .innerHTML = (a === b);   // triple equal for comparison
}
var c = "Brazil"; //asign variable
var d = "Brazil"; //asign variable
function function12() { //CReate function
	document.getElementById("Test12") .innerHTML = (c === d);   // triple equal for comparison
}
var e = "Brazil"; //asign variable
var f = Brazil; //asign variable
function function13() { //CReate function
	document.getElementById("Test13") .innerHTML = (e === f);   // triple equal for comparison
}
var g = "100"; //asign variable
var h = 10; //asign variable
function function14() { //CReate function
	document.getElementById("Test14") .innerHTML = (g === h);   // triple equal for comparison
}
function function15() { //CReate function
	document.getElementById("Test15") .innerHTML = (10 > 20 || 10 == 10);  //and operator for true false
}
function function16() { //CReate function
	document.getElementById("Test16") .innerHTML = (2 < 4 && 10 == 11);  //and operator for true false
}
function not_function17() { //CReate function
	document.getElementById("NOT17") .innerHTML = !(20 > 10);  //NOT operator
}
function not_function18() { //CReate function
	document.getElementById("NOT18") .innerHTML = !(5 > 10);  //NOT operator
}



