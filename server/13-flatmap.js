// flatMap(): aplana array e itera como un map()

const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"] },
    { userId: 2, username: "Mike", attributes: ["Lovely"] },
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"] },
];


// utilizando map() y flat() juntos para obtener un resultado como el del flatMap()
const userAttributes = users.map( user => user.attributes ).flat();
console.log( userAttributes );

// utilizando flatMap()
const userAttributes2 = users.flatMap( user => user.attributes );
console.log( userAttributes2 );



// reto: obtener un array de startDate
const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
  };

// Solucion 1
  const newCalendars = Object.values(calendars).flatMap( calendar => calendar );
  const startDates = newCalendars.map( item => item.startDate );
//   console.log( startDates );


// Solucion 2
const startDatesResp = Object.values(calendars)
    .flatMap( calendarArr => calendarArr.map( calendar => calendar.startDate) );
console.log( startDatesResp );