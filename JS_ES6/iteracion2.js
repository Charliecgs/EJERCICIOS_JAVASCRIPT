//Iteración #2: Destructuring

/*
2.1 En base al siguiente javascript, crea variables en base a las propiedades 
del objeto usando object destructuring e imprimelas por consola. Cuidado, 
no hace falta hacer destructuring del array, solo del objeto.
*/
const game = {
  title: "The last us 2",
  gender: ["action", "zombie", "survival"],
  year: 2020,
};

let title = game.title;
let gender = game.gender;
let year = game.year;

console.log(title, gender, year);

/*
2.2 En base al siguiente javascript, usa destructuring para crear 3 variables 
llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
imprimelo por consola.
*/
const fruits = ["Banana", "Strawberry", "Orange"];

let fruit1 = fruits[0];
let fruit2 = fruits[1];
let fruit3 = fruits[2];

console.log(fruit1, fruit2, fruit3);

/*
2.3 En base al siguiente javascript, usa destructuring para crear 2 
variables igualandolo a la función e imprimiendolo por consola.
*/
const animalFunction = () => {
  return { name: "Bengal Tiger", race: "Tiger" };
};

let name2 = animalFunction();
let race = animalFunction();

console.log(name2, race);

/*
2.4 En base al siguiente javascript, usa destructuring para crear las 
variables name y itv con sus respectivos valores. Posteriormente crea 
3 variables usando igualmente el destructuring para cada uno de los años 
y comprueba que todo esta bien imprimiendolo.
*/
const car = { name: "Mazda 6", itv: [2015, 2011, 2020] };

let name = car.name;
let itv = car.itv;

let itvYear1 = car.itv[0];
let itvYear2 = car.itv[1];
let itvYear3 = car.itv[2];

console.log(name, itv, itvYear1, itvYear2, itvYear3);
