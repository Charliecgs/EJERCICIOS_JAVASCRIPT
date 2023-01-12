//Iteración #1: Usa includes

/*Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". 
Usa la función .includes de javascript.
*/
const products = [
  "Camiseta de Pokemon",
  "Pantalón coquinero",
  "Gorra de gansta",
  "Camiseta de Basket",
  "Cinrurón de Orión",
  "AC/DC Camiseta",
];

for (let i = 0; i < products.length; i++) {
  if (products[i].includes("Camiseta")) {
    console.log(products[i]); //AB
  }
}

//OTRA FORMA

const products2 = [
  "Camiseta de Pokemon",
  "Pantalón coquinero",
  "Gorra de gansta",
  "Camiseta de Basket",
  "Cinrurón de Orión",
  "AC/DC Camiseta",
];

for (const i of products2) {
  if (i.toUpperCase().includes("CAMISETA")) {
    console.log(i);
  }
}
