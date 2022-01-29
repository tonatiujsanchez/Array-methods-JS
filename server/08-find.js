// find(): devuelve un solo elemento, el primero que compla con la condicion.
// si no encuentra ninguno, debuelve un undefine

// findIndex(): si encuentra el elementos, devuelve si posicion en el Array,
//  en caso de no encontrarlo, devuelve un -1

// Forma tradicional
const numbers = [ 1, 29, 30, 49, 10, 13 ];


let number = undefined;

for( let i = 0; i < numbers.length; i++ ){
    if( numbers[ i ] >= 30  ){
        number = numbers[ i ];
        break;
    }
}

console.log( number );


// Utilizando en metodo find()
const numbers = [ 1, 29, 30, 49, 10, 13 ];
const number = numbers.find( number => number >= 30 );
console.log( number );




// Ejercicio
const products = [
  {
    name: "Pizza",
    price: 12,
    id: '🍕'
  },
  {
    name: "Burger",
    price: 23,
    id: '🍔'
  },
  {
    name: "Hot dog",
    price: 34,
    id: '🌭'
  },
  {
    name: "Hot cakes",
    price: 355,
    id: '🥞'
  },
];

const product = products.find( element => element.id === '🍕' );
console.log( product );

const productIdx = products.findIndex( element => element.id === '🍕' );
console.log( productIdx );

