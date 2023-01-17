//Iteración #4: Map

/*
4.1 Dado el siguiente array, devuelve un array con sus nombres 
utilizando .map().
*/
const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const nombres = users.map((userName) => ({
  name: userName.name,
}));

console.log(nombres);

/*
4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
empiece por 'A'.
*/
const users1 = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const users2 = users1.map((user) => user.name);

for (let i = 0; i < users2.length; i++) {
	if(users2[i][0].includes("A")){
		users2[i] = "Anacleto";
	}
}

console.log(users2);

/*
4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
cuando el valor de la propiedad isVisited = true.
*/
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

for (let i = 0; i < cities.length; i++) {
  if(cities[i].isVisited == true){
    cities[i].name = cities[i].name + " visitado";
  }
  
}

const visited = cities.map((city) => city.name);

console.log(visited);

