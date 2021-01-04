var array = [2, 4, 6, 8];

var  TafelNum1 = document.getElementById("arraynumber1");
var  tafelText1 = document.getElementById("arraytafel1");
var  TafelNum2 = document.getElementById("arraynumber2");
var  tafelText2 = document.getElementById("arraytafel2");
var  TafelNum3 = document.getElementById("arraynumber3");
var  tafelText3 = document.getElementById("arraytafel3");
var  TafelNum4 = document.getElementById("arraynumber4");
var  tafelText4 = document.getElementById("arraytafel4");

var answersVanTafels = 0; 

TafelNum1.innerText = "Tafel van nummer" + array [0] + ":"  

for (i = 1; i<=10; i++) {
	answersVanTafels = array[0] * i;
	tafelText1.innerHTML += i + "x" + array[0] + "=" + answersVanTafels + "<br>";
}

TafelNum2.innerText = "Tafel van nummer" + array [1] + ":"  

for (i = 1; i<=10; i++) {
	answersVanTafels = array[1] * i;
	tafelText2.innerHTML += i + "x" + array[1] + "=" + answersVanTafels + "<br>";
}

TafelNum3.innerText = "Tafel van nummer" + array [2] + ":"  

for (i = 1; i<=10; i++) {
	answersVanTafels = array[2] * i;
	tafelText3.innerHTML += i + "x" + array[2] + "=" + answersVanTafels + "<br>";
}

TafelNum4.innerText = "Tafel van nummer" + array [3] + ":"  

for (i = 1; i<=10; i++) {
	answersVanTafels = array[3] * i;
	tafelText4.innerHTML += i + "x" + array[3] + "=" + answersVanTafels + "<br>";
}