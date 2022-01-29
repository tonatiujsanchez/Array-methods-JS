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


// Ejercicio 2
const data = [
    {
      name: 'Nicolas',
      level: 'low'
    },
    {
      name: 'Aadrea',
      level: 'medium'
    },
    {
      name: 'Zulema',
      level: 'hight'
    },
    {
      name: 'Santiago',
      level: 'low'
    }
];

// Opcion 1
const result = data.reduce( ( obj, item) =>{
    
     if( !(obj[item.level]) ){
        obj[item.level] = 1;
    }else{
        obj[item.level] = obj[item.level] + 1;
    }

    return obj
},{})

// console.log( result );

// Opcion 2

const levels = data
                .map( item => item.level )
                .reduce( (obj, level ) => {

                    (!obj[level]) ? obj[level] = 1 : obj[level] = obj[level] + 1

                    return obj
                }, {})

console.log( levels )



// Funcion para generar numeros aleatorios
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Array de rangos
const rangos = [ [1, 5], [6, 8], [9,10] ];

// Array de numeros generados de forma aleatoria
const numeros = [];

for (let i = 0; i < 30; i++) {
    numeros.push( getRandomInt(1, 10) );
}

// Utilizamos el map() para obtener todos los rangos disponibles
const rangosObj = rangos.map( rango => rango )
                    .reduce( ( obj, rango)=>{   //recoremos los rangos un reduce()

                        // Recorremos el array de numeros
                        numeros.forEach( numero =>{
                            // Verificamos si pertenece al rango actual
                            if( numero >= rango[0] && numero <= rango[1]  ){
                                // Si pertenece a este rango, verificamos que el rango ya este incluido en el objeto
                                if( obj[ rango ] ){
                                     obj[ rango ] = obj[ rango ] + 1;
                                }else{
                                    // Si no este incluido lo creamos
                                 obj[ rango ] = 1;
                                }
                            }
                        });

                        return obj
                    },{});

// Imprimimos los numeros y el objeto 
console.log('==== NUMEROS ====');
console.log( numeros );

console.log('==== RESULTADOS ====');
console.log( rangosObj );

