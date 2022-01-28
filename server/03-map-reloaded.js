const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
];



const resp = orders.map( item => item.total )
// console.log('Array original', orders );
// console.log( 'Array nuevo', resp );


// Agregando una nueva proiedad a los elementos
const ordersWhitTax = orders.map( item => {
    
    const newItem = { ...item };
    newItem.tax = 0.16;
    return newItem; 
});

console.log( orders );
console.log( ordersWhitTax );













