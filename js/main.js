/*Consegna:
1. chiedi all’utente il cognome
2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
3. stampa la lista ordinata alfabeticamente sia in console che in pagina
4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova */



// recupero elemento html
var list = document.getElementById('mainlist');

// definizione array
var cognomi = ['carbone', 'viapiana', 'massari', 'donatiello', 'ribezzo'];
console.table('prima: ', cognomi);

// inseriemento cognome
var request = prompt('Aggiungi il tuo cognome alla lista');
cognomi.push = request;
console.table('dopo: ', cognomi);

// ordinamento alfabetico
for (var i = 0; i <= cognomi.length; i++) {
    console.log(cognomi.sort()[i]);
}