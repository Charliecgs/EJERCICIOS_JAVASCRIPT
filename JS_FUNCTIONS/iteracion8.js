//Iteration #8: Contador de repeticiones

//Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  Puedes usar este array para probar tu función:

const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];

let contador = [];
function repeatCounter(param) {
  for (const word of param) {
    if (contador[word]) {
      contador[word]++;
    } else {
      contador[word] = 1;
    }
  }
  console.log(contador);
}

repeatCounter(counterWords);

// OTRA FORMA

// function repeatCounter(paramRept){ 
//   const emptyObject = {}
//   for (word of paramRept){
//     if(word in emptyObject){
//       emptyObject[word] += 1
//     }else emptyObject[word] = 1
//   }
//   return emptyObject
// }
// console.log(repeatCounter(counterWords));
