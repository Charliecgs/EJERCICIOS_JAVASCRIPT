//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

const showMe = document.querySelector(".showme");
console.log(showMe);

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

const pillad = document.querySelector("#pillado");
console.log(pillad);

//1.3 Usa querySelector para mostrar por consola todos los p

const allP = document.querySelectorAll("p");
console.log(allP);

//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

const allPokemon = document.querySelectorAll(".pokemon");
console.log(allPokemon);

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
// data-function="testMe".

const allDataFunction = document.querySelectorAll("[data-function=testMe]");
console.log(allDataFunction);

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
// data-function="testMe".

const tercero = document.querySelectorAll("[data-function=testMe]");
console.log(tercero[3]);