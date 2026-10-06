// import { genericFuction, genericFuctionArrow } from './generics/generics';
// import { Hero } from './interfaces/hero';
// import { Villain } from './interfaces/villian';

// import { getPokemon } from './generics/get-pokemon';
//*****  IMPORT DECORATORS  **********
import { Pokemon } from './decorators/pokemon-class';


// import { Hero } from './classes/Hero';
// // Creando un alias
// import { Hero as Superhero } from './classes/Hero';
// import { powers } from './data/powers';


// const ironman = new Superhero('Superman',1, 33);

// console.log(ironman);
// console.log( powers);

//*****  GENERICS  **********
/*son funciones que reciben cualquier tipo de argumento y decirle que regresará*/
// console.log(genericFuction(3.141516).toFixed(2));
// console.log(genericFuctionArrow(3.141516).toFixed(2));

// const deadpool = {
//     name: 'Deadpool',
//     realName: 'Wade Winston',
//     dangerLevel: 130,
// }

// console.log(genericFuctionArrow <Villain> (deadpool).dangerLevel);


//!!!  GENERICS FROM AXIOS (PROMISES)  **********
// getPokemon(4)
// .then(resp => console.log(resp.data))
// .catch(error => console.error(error))
// .finally( () => console.log('Fin de la promesa'))

//*****  DECORATORS  **********
const charmander = new Pokemon('charmander')

(Pokemon.prototype as any ).customName = 'Pikachu'; // Expadir prototipo añadiendo una nueva propiedad

console.log(charmander);