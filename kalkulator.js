'use strict';



function oblicz(event) { //zmienne z wartościami pol formularza
	event.preventDefault();
	var wplata = parseInt(document.getElementById('wplata').value);	
	var iloscLat = parseInt(document.getElementById('ilosc-lat').value);
	var okresKapitalizacji = parseInt(document.getElementById('okres-kapitalizacji').value);
	var oprocentowanie = parseInt(document.getElementById('oprocentowanie').value)/100;
	var podatek = document.getElementById('podatek').checked;	
	
	var wynik = obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek); //do zmiennej wynik przypisuje to, co ma zwrocic funkcja obliczZysk
	
	document.getElementById('wynik').innerHTML = wynik;
}




function obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek) { //sprawdzamy, czy zysk z lokaty jest oprocentowany podatkiem belki
	
		if (podatek) {
			var oprocentowanieOpodatkowane = oprocentowanie - (oprocentowanie * 0.19); //kwota ma byc opodatkowana
		} else {
			var oprocentowanieOpodatkowane = oprocentowanie; //podatek belki nie jest uwzględniony
		}
	
	 var kapital = wplata*(Math.pow(1+(oprocentowanieOpodatkowane/okresKapitalizacji), iloscLat*okresKapitalizacji)); //definiujemy wzor na obliczenie kapitalu
	
	return kapital.toFixed(2); //zaokraglenie do gory do 2 miejsca po przecinku
	
}
