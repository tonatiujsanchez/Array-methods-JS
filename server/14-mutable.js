// metodos mutables de los Arrays

const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

console.log("products", products);
console.log("myProducts", myProducts);
console.log("=".repeat(30));



// splice(1, 0, itemNuevo) :es mutable, elimina e inserta nuecos elementos la array |  splice(posicion_inicial, Num_elementos_a_eliminar, items_nuevos_a_agregagar) 

// slice(2, 5) :es inmutable, devuelve un nuevo array con los elementos indicados | slice( posicion_inicial , posicion_final)


const productIdx = products.findIndex( item => item.id === '🍔' );
let newProducts = [];
if( productIdx !== -1 ){
    myProducts.push( products[productIdx] );
    products.splice( productIdx, 1 );
};

console.log("products", products);
console.log("myProducts", myProducts);
console.log("=".repeat(30));


// Ejemplo 2

const productsv2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];


const updateProduct = {
    id: '🥞',
    changes: {
        price: 200,
        description: 'delicius'
    }
}

const productoIdxV2 = productsv2.findIndex( item => item.id === '🥞' );
if( productoIdxV2 ){
    productsv2[productoIdxV2] = {
        ...productsv2[productoIdxV2],
        ...updateProduct.changes
    }
}

console.log( productsv2 );

