//Iteración #1: Mix for e includes

/*Dado el siguiente javascript usa forof para recorrer el array de películas, genera un nuevo array con las categorías
de las películas e imprime por consola el array de categorías. Ten en cuenta que las categorías no deberían repetirse. 
Para filtrar las categorías puedes ayudarte de la función .includes()
*/

//ESTE ESTA MAL TODAVIA NO LO HE HECHO

const movies = [
  { title: "Madaraspar", duration: 192, categories: ["comedia", "aventura"] },
  { title: "Spiderpan", duration: 122, categories: ["aventura", "acción"] },
  {
    title: "Solo en Whatsapp",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "El gato con guantes",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

const categories2 = [];

for (const key of movies) {
  for (key2 of key.categories) {
    if (!categories2.includes(key2)) {
      categories2.push(key2);
    }
  }
}

console.log(categories2);
