var spellen = ['Monopoly', 'Yathzee', 'Bridge', 'Poker', 'Pesten', 'Mens erger je niet', 'Cluedo'];

var spel = document.getElementById("spel");

var randomspel = Math.floor((Math.random() * spellen.length));

console.log(randomspel);

spel.innerHTML = spellen[randomspel]; 