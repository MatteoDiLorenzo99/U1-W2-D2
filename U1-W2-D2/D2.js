/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
let num1 = 10;
let num2 = 20;

if (num1 > num2) {
  console.log(num1 + " è il numero più grande");
} else if (num2 > num1) {
  console.log(num2 + " è il numero più grande");
} else {
  console.log("I numeri sono uguali");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
let number = 7;

if (number !== 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5.
*/
let num = 15;

if (num % 5 === 0) {
  console.log("divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
let a = 8;
let b = 0;

if (a === 8 || b === 8 || a + b === 8 || a - b === 8 || b - a === 8) {
  console.log("Condizione soddisfatta");
}

/* ESERCIZIO 5
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
let totalShoppingCart = 60;
let shippingCost = 10;

if (totalShoppingCart > 50) {
  shippingCost = 0;
}
let totalCheckout = totalShoppingCart + shippingCost;
console.log("Totale da pagare: " + totalCheckout + "€");

/* ESERCIZIO 6
  Modifica la risposta precedente includendo lo sconto del 20% e calcola il totale.
*/
let discount = totalShoppingCart * 0.2;
totalShoppingCart -= discount;

if (totalShoppingCart > 50) {
  shippingCost = 0;
} else {
  shippingCost = 10;
}

totalCheckout = totalShoppingCart + shippingCost;
console.log("Totale da pagare con sconto: " + totalCheckout + "€");

/* ESERCIZIO 7
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
*/
let x = 30;
let y = 10;
let z = 20;
let sorted;

if (x > y && x > z) {
  sorted = y > z ? [x, y, z] : [x, z, y];
} else if (y > x && y > z) {
  sorted = x > z ? [y, x, z] : [y, z, x];
} else {
  sorted = x > y ? [z, x, y] : [z, y, x];
}

console.log("Numeri ordinati: " + sorted);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no.
*/
let value = "ciao";

if (typeof value === "number") {
  console.log("È un numero");
} else {
  console.log("Non è un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari.
*/
let numberToCheck = 11;

if (numberToCheck % 2 === 0) {
  console.log("Il numero è pari");
} else {
  console.log("Il numero è dispari");
}

/* ESERCIZIO 10
  Modifica la logica dell'algoritmo in modo che mostri il messaggio corretto.
*/
let val = 7;

if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Scrivi del codice per aggiungere una proprietà "city" all'oggetto "me".
*/
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
};
me.city = 'Toronto';
console.log(me);

/* ESERCIZIO 12
  Scrivi del codice per rimuovere la proprietà "lastName".
*/
delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
let numbersArray = [];
for (let i = 1; i <= 10; i++) {
  numbersArray.push(i);
}
console.log(numbersArray);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
numbersArray[numbersArray.length - 1] = 100;
console.log(numbersArray);

