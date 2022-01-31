

// Forma tradidiconal
const matriz = [
    [ 1, 2, 3 ],
    [ 4, 5, 6, [ 7 ,8 ] ],
    [ 9, 10, 11 ]
];

const newMatriz = [];


for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];

    for (let j = 0; j < array.length; j++) {
        const element = array[j];

        if( Array.isArray( element ) ){
            for (let k = 0; k < element.length; k++) {
                const item = element[k];
                 newMatriz.push( item );
            }
        }else{
            newMatriz.push( element );
        }

    }
    
}

console.log('matriz', matriz );
console.log( 'newMatriz', newMatriz );


// version 2: forma tradicional, utilizando recursividad


const matriz = [
    [ 1, 2, 3 ],
    [ 4, 5, 6, [ 7 ,8, [ 9, 10 ] ] ],
    [ 9, 10, 11, [ 12, 13 ] ]
];


const concatArrays = ( list )=>{

    let newList = [];

    if( ( typeof list ) != "object" ){
        return list;
    }

    list.forEach( element => {
         const item = concatArrays( element );
         newList = newList.concat( item );
    });

    return newList;
}


const newMatriz = concatArrays( matriz );
console.log( newMatriz );







// Utilizando el metedo flat()

const matriz = [
    [ 1, 2, 3 ],
    [ 4, 5, 6, [ 7 ,8, [ 9, 10 ] ] ],
    [ 11, 12, 13, [ 14, 15 ] ]
];

const newMatriz = matriz.flat(3); // Indicamos cuantos niveles queremos que aplane
console.log( newMatriz );