const posts = [
  { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
  { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
  { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
  { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
]

//Mando in console la consegna per capirla
console.log("Snack 4: Crea un nuovo array coi nomi di tutti gli autori");

// Crea un nuovo array coi nomi di tutti gli autori
const autori = posts.map(post => post.author)

//Mando in console la consegna per capirla
console.log(`Gli autori sono: ${autori}`);

// Risultato: ['Marco', 'Luca', 'Fabrizio', 'Enrico']