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

function repeatCounter(param) {
  const ordenados = param.sort();
  contador = 1;

  for (let i = 0; i < ordenados.length; i++) {
    if (ordenados[i] == ordenados[i + 1]) {
      contador = contador + 1;
    } else {
      contador = 0;
    }
    console.log(ordenados[i] + contador);
  }

}

repeatCounter(counterWords);
