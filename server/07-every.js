
// every(): Verifica que todos cumplan la condicion y retorna un true o un false

// Forma tradicional
const numbers = [ 1, 30, 39, 29, 10, 13 ];
let isEvery = true;

for( let i = 0; i < numbers.length; i++ ){
    if( !(numbers[ i ] <= 40) ){
        isEvery = false;
        break;
    }
}

console.log( isEvery );


// Utilizando el metodo every()
const numbers = [ 1, 30, 49, 29, 10, 13 ];

const isEvery = numbers.every( number => number <= 40 );

console.log( isEvery );




// Reto
const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 18,
    },
];

// Solucion 1
const areTheyMinors = team.every( member => member.age <= 15 );
console.log( areTheyMinors );

// Solucion 2
const areTheyMinors2 = team.map( member => member.age )
                            .every( age => age <= 15 );

console.log( areTheyMinors2 );