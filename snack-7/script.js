const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

const studente2 = students.filter(studente => studente.id === 2);

//Mando in console la consegna per capirla
console.log("Snack 7: Recupera i dati dello studente con id 2")

console.log("Gli studenti sono: ")
console.log(students);

console.log("Lo studente id 2 è:")
console.log(studente2)
// Recupera i dati dello studente con id 2

// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }