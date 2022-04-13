function full_Sentence() { //Create a function
    var part_1 = "I have "; //Assign variables 
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4); //concat values
    document.getElementById("Concatenate").innerHTML = whole_sentence; //print to html
}

function slice_Method() { //name function
	var Sentence = "All work and no play makes Johnny a dull boy."; //assign variables
	var Section = Sentence.slice (27, 33);
	document.getElementById("Slice") .innerHTML = Section; //convert and display to html
}

function Function1() { //name function
  	let text = document.getElementById("upcase").innerHTML;
  	document.getElementById("upcase").innerHTML = text.toUpperCase(); //convert and display to html
}

function Function2() { //name function
    var str = "It is going to be a good day to watch the game!"; //assign variables
    var n = str.search("day");
    document.getElementById("search").innerHTML = n; //convert and display to html
}

function Function3() { //name function
    var A = 567; //assign variable
    document.getElementById("numbers_to_string").innerHTML = A.toString(); //convert and display to html
}

function Function5() { //name function
    var B = 1234.56789; //assign variable
    document.getElementById("precision").innerHTML = B.toPrecision(6); //convert and display to html
}

function Function6() { //name function
    var num = 123.456789; //assign variables
    var n = num.toFixed(2);
    document.getElementById("fixed").innerHTML = n; //convert and display to html
}

function Function7() { //name function
    var num = 12345; //assign variables
    var n = num.valueOf();
    document.getElementById("value").innerHTML = n; //convert and display to html
}


