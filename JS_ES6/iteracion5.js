//Iteración #5: Filter

/*
5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean mayor que 18
*/
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const newArray = ages.filter((age) => age > 18);

console.log(newArray);

/*
5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean par.
*/
const ages1 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const pares = ages1.filter((age) => age % 2 == 0);

console.log(pares);

/*
5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que tengan el gameMorePlayed = 'League of Legends'.
*/
const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const nameStreamers = streamers.filter(
  (stream) => stream.gameMorePlayed == "League of Legends"
);

console.log(nameStreamers);

/*
5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
usar la funcion .includes() para la comprobación.
*/
const streamers1 = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const streamerWithU = streamers1.filter((streamer) =>
  streamer.name.includes("u")
);

console.log(streamerWithU);

/*
5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
.includes() para la comprobación.
Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
.age sea mayor que 35.
*/
const streamers2 = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const newStreamers = streamers2.filter(
  (streamer) => streamer.gameMorePlayed.includes("Legends") && streamer.age > 35
);

for (let i = 0; i < streamers2.length; i++) {
  if(streamers2[i].age > 35){
    streamers2[i].gameMorePlayed = streamers2[i].gameMorePlayed.toUpperCase();
  }
    
}

console.log(newStreamers);
console.log(streamers2);


