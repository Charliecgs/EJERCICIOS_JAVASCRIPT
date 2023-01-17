//Iteración #1: Arrows

/*
Crea una arrow function que tenga dos parametros a y b y 
que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre 
por consola la suma de los dos parametros.

*/

//1.1 Ejecuta esta función sin pasar ningún parametro
const suma = (a = 10, b = 5) => {
  return a + b;
};
console.log(suma());

//1.2 Ejecuta esta función pasando un solo parametro
const suma2 = (a = 10, b = 5) => {
  return a + b;
};
console.log(suma2(2));

//1.3 Ejecuta esta función pasando dos parametros
const suma3 = (a = 10, b = 5) => {
  return a + b;
};
console.log(suma3(2, 4));
