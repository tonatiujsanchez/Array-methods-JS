// filter(): devuelve un nuevo Array con los elementos que cumplan la condicion, si ningun elemento cumple dicha condidion, este regresa un Array vacio.

const words = [ 'spray', 'limit', 'elite', 'exuberant' ];


// Forma tradicional con  forEach
const newArray = [];

words.forEach( ( item )=>{
    if( item.length >= 6 ){
        newArray.push( item )
    }
});

console.log(newArray);



// Utilizancon el metodo filter()
const words = [ 'spray', 'limit', 'elite', 'exuberant' ];

const newArray = words.filter( item => item.length >= 6 );

console.log( words );
console.log( newArray );


// Other ejample
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


const itemsDelivered = orders.filter( order => order.delivered );
// console.log( itemsDelivered );


const itemsDeliveredAndTotal = orders.filter( order => order.delivered && order.total >= 100 );
// console.log( itemsDeliveredAndTotal );


const search = ( query ) => {

    return orders.filter( order => (order.customerName.toLocaleLowerCase()).includes( query.toLocaleLowerCase() ) );
}


console.log( search('TI') );