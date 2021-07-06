/*Consegna:
1. chiedi all’utente il cognome
2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
3. stampa la lista ordinata alfabeticamente sia in console che in pagina
4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova */



// recupero elemento html
var list = document.getElementById('mainlist');
var position = document.getElementById('surnameposition');

// definizione array
var cognomi = ['Carbone', 'Viapiana', 'Massari', 'Donatiello', 'Ribezzo'];
console.table('prima: ', cognomi);



// inseriemento cognome
var usersurname = prompt('Aggiungi il tuo cognome alla lista');
cognomi.push(usersurname);
console.table('dopo: ', cognomi);

// ordinamento alfabetico
cognomi.sort();

// stampa in html
var compilazione = ' ';

for (var i = 0; i < cognomi.length; i++) {
    compilazione += '<li>' + (i + 1) + ' ' + cognomi[i] + '</li>';
    console.log(cognomi[i]);
}

list.innerHTML = compilazione;
position.innerText = 'Il tuo cognome si trova in posizione:' + cognomi.indexOf(usersurname);


