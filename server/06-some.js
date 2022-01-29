// some() : verifica si existe al menos un elemento que cumpla la condicion y devuelve un true o un false.


// Forma tradicional
const numbers = [ 1, 2, 3, 5 ];

let includesPair = false;

for (let i = 0; i < numbers.length; i++) {

    console.log( numbers[i] );

    if( numbers[i]%2 === 0 ){
        includesPair = true;
       break;
    }
}

console.log( includesPair );



// Utilizando en metodo some()
const numbers = [ 1, 2, 3, 5 ];

const containsPair = numbers.some( number => number % 2 === 0 );
console.log( containsPair );



// Ejemplo 1
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


const someWereDelivered = orders.some( order => order.delivered);

console.log( someWereDelivered );




// Ejemplo 2
// instalacion: npm i date-fns
var areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');


const dates = [
    {
      startDate: new Date(2022, 1, 1, 10),
      endDate: new Date(2022, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2022, 1, 1, 15),
      endDate: new Date(2022, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2022, 1, 1, 20),
      endDate: new Date(2022, 1, 1, 21),
      title: "Cena",
    },
];


const newAppointment = {
    startDate: new Date(2022, 1, 1, 8),
    endDate: new Date(2022, 1, 1, 9, 30),
};

const isOverlap = ( newDate ) =>{
    return dates.some( date => {
        return areIntervalsOverlapping(
            {
                start: date.startDate,
                end: date.endDate
            },
            {
                start: newDate.startDate,
                end: newDate.endDate
            }
        )
    });
}

console.log( isOverlap( newAppointment ) );











