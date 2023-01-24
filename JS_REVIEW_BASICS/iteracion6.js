//Iteración #6: Función swap

// Crea una función llamada `swap()` que reciba un array y dos parametros que sean indices del array. La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array resultante.

// Sugerencia de array:

const futbols = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];

const swap = (array, a, b) => {
    const indiceDeA = array.indexOf(a);
    const indiceDeB = array.indexOf(b);

    array[indiceDeA] = b;
    array[indiceDeB] = a;

    return array;

}

console.log(swap(futbols, "Mesirve", "Ronalguiño"));