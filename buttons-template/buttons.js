var button1 = document.getElementById("btn1");
var button2 = document.getElementById("btn2");
var button3 = document.getElementById("btn3");



var counterbtn1 = 0;
var counterbtn2 = 0;
var counterbtn3 = 0;

button1.addEventListener("click", function() {
	counterbtn1++;
	button1.innerHTML = counterbtn1;
	document.getElementById("img1").src = "images/bg1.jpg";
	document.getElementById("img2").src = "images/1.jpg";
});
 
button2.addEventListener("click", function() {
	counterbtn2++;
	button2.innerHTML = counterbtn2;
	document.getElementById("img1").src = "images/bg2.jpg";
	document.getElementById("img2").src = "images/2.jpg";
});

button3.addEventListener("click", function() {
	counterbtn3++;
	button3.innerHTML = counterbtn3;
	document.getElementById("img1").src = "images/bg3.jpg";
	document.getElementById("img2").src = "images/3.jpg";
}); 

