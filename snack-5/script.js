const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
let numeriPari = nums.filter(numero => numero % 2 === 0);

console.log(`I numeri pari sono ${numeriPari}`)

// Risultato: [2, 8, 4, 12]