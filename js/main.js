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
var usersurname = prompt('Aggiungi il tuo cognome alla lista');
cognomi.push(usersurname);
console.table('dopo: ', cognomi);

// ordinamento alfabetico

var compilazione = ' ';

for (var i = 0; i < cognomi.length; i++) {
    compilazione += '<li>' + i + ' ' + cognomi[i] + '</li>'
    console.log(cognomi.sort()[i]);
}

list.innerHTML = compilazione;