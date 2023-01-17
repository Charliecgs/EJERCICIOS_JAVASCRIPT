//Iteración #4: Map

/*
4.1 Dado el siguiente array, devuelve un array con sus nombres 
utilizando .map().
*/
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const nombres = users.map((userName) =>({
    name: userName.name
}));

console.log(nombres);

/*
4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
empiece por 'A'.
*/
 const users1 = [
 	{id: 1, name: 'Abel'},
 	{id:2, name: 'Julia'},
 	{id:3, name: 'Pedro'},
 	{id:4, name: 'Amanda'} 
];

const users2 = users1.map((user) => user.name);

console.log(users2);




  