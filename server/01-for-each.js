// forEach(): itera un Array sin devoñver nada

const letters = ['a', 'b', 'c', 'd'];

// Forma tradicional

for( let i = 0; i < letters.length; i++){
    let letter = letters[i];
    console.log('for', letter );
}

// Foreach method

letters.forEach( letter => console.log('foreach', letter ) );