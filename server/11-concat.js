// concat(): une 2 o más arrays



// forma tradicional
const elemnts = [ 1, 2, 2, 2 ];
const otherElements = [ 3, 3, 4, 4 ];

const newArray = [ ...elemnts ];

for (let idx = 0; idx < otherElements.length; idx++) {

    const element = otherElements[idx];    
    newArray.push( element );
}

console.log( newArray );






// Utilizando el metodo contact()
const elemnts = [ 1, 2, 2, 2 ];
const otherElements = [ 3, 3, 4, 4 ];

const newArray = elemnts.concat( otherElements );
console.log( newArray );



// Utilizando el operador 'spreed' para clonar un Array
const array1 = [ 1, 2, 3, 4 ];
const array2 = [ 5, 6, 7, 8 ];

const array3 = [ ...array1, ...array2 ];
console.log( array3 );


// En este caso, si utilizamos el operador 'spreed' con la palabra, 'hola' se insetaria letra por letra, es por eso no se usa si se quiere insertar tal cual como esta. 
const array4 = [ ...array1, 'Hola' ]; 
console.log( array4 );
