var dagen = ["maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag","zondag",];

var DagenVanDeWeek = document.getElementById("dagenvandeweek");
var WerkDagen = document.getElementById("werkdagen");
var WeekendDagen = document.getElementById("weekenddagen");
var DagenVanDeWeek2 = document.getElementById("dagenvandeweek2");
var WerkDagen2 = document.getElementById("werkdagen2");
var WeekendDagen2 = document.getElementById("weekenddagen2");

for (i = 0; i < dagen.length; i++){
	DagenVanDeWeek.innerHTML += dagen[i] + ", ";
}

for (i = 0; i < 5; i++){
	WerkDagen.innerHTML += dagen[i] + ", ";
}

for (i = 5; i <=6; i++){
 WeekendDagen.innerHTML += dagen[i] +", ";
}


for (i = 6; i >= 0; i--){
	DagenVanDeWeek2.innerHTML += dagen[i] + ", ";
}

for (i = 4; i >= 0; i--){
	WerkDagen2.innerHTML += dagen[i] + ", ";
}

for (i = 6; i >= 5; i--){
	WeekendDagen2.innerHTML += dagen[i] + ", ";
}