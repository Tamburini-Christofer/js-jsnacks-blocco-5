const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
const numberPlus = numbers.map(numero => numero + 1);
console.log(`Array precedente: ${numbers}`);
console.log(`Array aumentato: ${numberPlus}`);

// Risultato: [3, 9, 5, 8, 3, 88] 