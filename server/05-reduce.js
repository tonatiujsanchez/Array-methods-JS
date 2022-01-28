const totals = [ 1, 2, 3, 4 ];



// Modo tradicional
let acomulator = 0;

console.log( acomulator );

for( let iterator = 0; iterator < totals.length; iterator++ ){
    acomulator = acomulator + totals[iterator]; 
}

// console.log( acomulator );


// Utilizando el metodo reduce()
// Recibe dos parametros, una funcion y el estado inicial del acomulador
// aunque el estado inicial puede se opcional, simpre y cuando el Array contenga 2 elementos como minimo
// Ya que si no indicamos el valor inicial del acomulador y el Array solo tiene un solo valo, este no ara ninguna iteración
// A diferecia de que si agregamos el valor inicial del itrador, estonces si hara por lo menos y ua iteracion aunque este tenga un solo valor
const totals = [ 1, 2, 3, 4 ];

const suma = totals.reduce( ( acomulator, item )=>{

    console.log({ acomulator, item });

    // return acomulator + item;
}, 0);


// Ejercicio
const numbers = [ 1, 2, 2, 3, 4, 1, 2, 3, 4 ];

const numbersCount = numbers.reduce(( obj, number )=>{
    
    if( !obj[number] ){
        obj[number] = 1;
    }else{
        obj[number] = obj[number] + 1;
    }
     
    return obj;
}, {});

console.log( numbersCount );