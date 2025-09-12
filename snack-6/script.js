const zucchine = [
  { type: 'Napoletana', weight: 10, length: 4 },
  { type: 'Trombetta', weight: 13, length: 16 },
  { type: 'Napoletana', weight: 4, length: 23 },
  { type: 'Trombetta', weight: 11, length: 6 },
  { type: 'Napoletana', weight: 2, length: 17 },
  { type: 'Romana', weight: 5, length: 10 },
  { type: 'Romana', weight: 7, length: 9 },
  { type: 'Trombetta', weight: 3, length: 8 },
  { type: 'Calabrese', weight: 6, length: 27 },
  { type: 'Calabrese', weight: 14, length: 4 },
];

const zucchineLunghe = zucchine.filter(zucchina => zucchina.length >= 15);
const zucchineRestanti = zucchine.filter(zucchina => zucchina.length < 15);

//Mando in console la consegna per capirla
console.log("Snack 6:  A partire dall'array fornito, crea due array. Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti.Crea un array a partire dall'array nums, che abbia solo i numeri pari")

console.log("le zucchine lunghe più di 15")
console.log(zucchineLunghe)

console.log("le zucchine restanti")
console.log(zucchineRestanti)
// A partire dall'array fornito, crea due array. 

// Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti.