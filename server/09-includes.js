// includes(): Busca si algun lemento conicide con la busqueda y devuelve un true o un false. Mayormente se utiliza en strings
// Funcina para Array y para strings



// Forma tradicional
const pets = [ 'cat', 'dogs', 'bat' ];

let existPet = false;

for (let i = 0; i < pets.length; i++) {
    const element = pets[i];

    if( element === 'dog' ){
        existPet = true;
        break;
    }
    
}

console.log( existPet );


// Utilizando el metos includes()
const pets = [ 'cat', 'dogs', 'bat' ];

const existPet = pets.includes( 'cat' );

console.log( existPet );