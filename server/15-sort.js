// sort(): orderna los elementos de un array
const months = ["March", "Jan", "Feb", "Dec"];

months.sort();

console.log( months );

// Number

const numbers = [1, 30, 4, 21, 100000];
numbers.sort( ( a, b ) => a - b  );

console.log( numbers );



// strings
const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];

// words.sort();
words.sort( (a, b) => a.localeCompare(b) ); //navegadores antiguos
console.log( words );




// object
const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];

orders.sort( (orderA, orderB) => orderA.total - orderB.total );

console.log( orders );



// Fechas

const ordersDates = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
        date: new Date(2022, 1, 5, 10),
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
        date: new Date(2022, 1, 1, 15),
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
        date: new Date(2022, 1, 3, 21),
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
        date: new Date(2022, 1, 3, 20),
    },
];

ordersDates.sort( ( orderA, orderB ) => orderA.date - orderB.date );
console.log( ordersDates );



// Ordenar un Array de forma aleatroria

const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

const numbersOrderRamdom = numbers.sort( () => Math.random() - 0.5 );
console.log( numbersOrderRamdom );

