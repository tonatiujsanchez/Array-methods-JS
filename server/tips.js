

// Recupera un item de un array de forma aleatoria

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


const randomIndex = Math.floor( Math.random() * orders.length );

const itemRandom = orders[ randomIndex ];

console.log( itemRandom );


// Filtrar los valores unicos de un array

const numbers = [ 1, 1, 2, 2, 3, 3, 3, 4, 4, 5, 6,7, 8, 9, 9, 8, 5, 5];
const uniqueNumbers = [ ... new Set( numbers ) ];

console.log( uniqueNumbers );