// join(): Une los elemntos de un Array en un string con el separador que se le indique
// split(): Sepera un string en un Array mediante el seprador que se le indique.

// Forma tadicional - join()
const elements = [ 'Fire', 'Air', 'Water' ];

let elementsJoin = '';
let separador = ', '
for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    

    if( i === (elements.length - 1) ){
        elementsJoin += `${element}`;
    }else{
        elementsJoin += `${element}${separador}`;
    }
}

console.log(elementsJoin);



// Utilizando el metodo join()
const elements = [ 'Fire', 'Air', 'Water' ];

const elementsJoin = elements.join('-')
console.log( elementsJoin );




// split()
const title = 'Curso de Manipulación de Array con Javascript';

const arrTitle = title.split(' ');
console.log( arrTitle );


// split with join
const urlTitle = title.split(' ').join('-').toLocaleLowerCase();
console.log( urlTitle );


