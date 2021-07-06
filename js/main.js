/*Consegna:
1. chiedi all’utente il cognome
2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
3. stampa la lista ordinata alfabeticamente sia in console che in pagina
4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova */



// recupero elemento html
var list = document.getElementById('mainlist');

// definizione array
var cognomi = ['carbone', 'viapiana', 'massari', 'di bella', 'ribezzo'];
console.table('prima: ', cognomi);

// inseriemento cognome
var request = prompt('Aggiungi il tuo cognome alla lista');
cognomi.push = (request);
console.table('dopo: ', cognomi);

// stampa su html
var stampa = '';