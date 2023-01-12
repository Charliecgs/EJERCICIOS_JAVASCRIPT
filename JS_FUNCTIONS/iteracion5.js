//Iteración #5: Calcular promedio de strings

/*Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:
 */
const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];

//NO SE PUEDE HACER CON UN ISNAN POR QUE EL '10' LO COGE COMO NUMERO Y NO COMO STRING
// for (let i = 0; i < mixedElements.length; i++) {
//     if(isNaN(mixedElements[i])){
//        console.log(mixedElements[i].length);
//     }
// }

function averageWord(param) {
  let todoNumeros = [];
  for (const key of param) {
    if (typeof key === "number") {
      todoNumeros.push(key);
    } else if (typeof key === "string") {
      todoNumeros.push(key.length);
    }
  }
  
  let sumaNumeros = 0;

  for (const key2 of todoNumeros) {
    sumaNumeros = key2 + sumaNumeros;
  }

  return sumaNumeros;
}

console.log(averageWord(mixedElements));
