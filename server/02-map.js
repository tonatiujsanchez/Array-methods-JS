// el metodo 'map' es inmutable, es decir genera una copia del Array original
// 'map' genera otro Array con el mismo numero de elementos que el original, NO menos, NO más.

const letters = [ 'a', 'b', 'c', 'd', 'e' ];
// tradicional

const newArray = [];

for (let index = 0; index < letters.length; index++) {
    const element = letters[index];

    newArray.push( element+'++' )
}
console.log( letters );
console.log( newArray );




// map method
console.warn('==== map ===');

const letters = [ 'a', 'b', 'c', 'd', 'e' ];

const otherArray = letters.map( letter => `${letter}++` );

console.log( letters );
console.log( otherArray );




const frutas = ['pera', 'manzana', 'piña', 'aguacate'];
     frutas.map( ( fruta )=>{
        console.log( fruta );
    });

// function imprimeFrutas( fruta ){
//     console.log( fruta );
// }




