const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

//Mando in console la consegna per capirla
console.log("Snack 2: stampa in console tutti i nomi:");

// Stampa in console tutti i nomi
people.forEach(persona => console.log(persona.name));

// Risultato: 'Paolo', 'Giulia', 'Marco'