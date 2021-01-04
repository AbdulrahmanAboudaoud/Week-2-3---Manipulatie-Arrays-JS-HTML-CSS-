var arrayEen = [1,2,3,4,5,6,7,8,9,10];
var arrayTwee = [2,4,6,8,10,12,14,16,18,20];
var AdditionText = document.getElementById("optellen");
var SubtractionText = document.getElementById("aftrekken");
var MultiplyText = document.getElementById("vermenigvuldigen");
var DivideText = document.getElementById("delen");

var answer = 0; 

function optellen(num1, num2){
	for (var i=0; i<10; i++){
		answer = num1[i] + num2[i]
		AdditionText.innerHTML +=  num1[i] + "+" + num2[i] + "=" + answer + "<br>"
	}
}



function aftrekken(num1, num2) {
	for (i=0; i<10; i++) {
		answer = num1[i] - num2[i]
		SubtractionText.innerHTML +=  num1[i] + " - "+ num2[i] + " = " + answer + "<br>"
	}
}


function vermenigvuldigen(num1, num2) {
	for (i=0; i<10; i++) {
		answer = num1[i] * num2[i]
		MultiplyText.innerHTML +=  num1[i] + " * "+ num2[i] + " = " + answer + "<br>"
	}
}
function delen(num1, num2) {
	for (i=0; i<10; i++) {
		answer = num1[i] / num2[i]
		DivideText.innerHTML +=  num1[i] + " / "+ num2[i] + " = " + answer + "<br>"
	}
}

optellen(arrayEen, arrayTwee);
aftrekken(arrayEen, arrayTwee);
vermenigvuldigen(arrayEen, arrayTwee);
delen(arrayEen, arrayTwee);