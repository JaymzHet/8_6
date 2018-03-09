var a = prompt('Podaj wartość pierwszej zmiennej', a);
var b = prompt('Podaj wartość drugiej zmiennej', b);
var value = (a * a) - (2 * a * b) - (b * b);

if (value > 0) {
	console.log ('Wynik dodatni')
}
else if (value < 0) {
	console.log ('Wynik ujemny')
}
else {
	console.log ('Wynik jest równy 0')
}