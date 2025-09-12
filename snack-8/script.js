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

const marioLanciClasse = students.find(studente => studente.name === 'Marco Lanci').class;

console.log ("Snack 8: Recupera la classe dello studente 'Marco Lanci'")
console.log (students)
console.log ("La sua classe è " + marioLanciClasse)
// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'C