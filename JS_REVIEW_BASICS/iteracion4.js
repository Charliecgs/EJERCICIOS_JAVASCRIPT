//Iteración #4: Métodos findArrayIndex

// Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y 
// devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro. 
// Haz varios ejemplos y compruebalos.

// Sugerencia de función:
const bichos = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']

const findArrayIndex = (array, text) =>{
    const iguales = array.filter((item) => item === text);

    if(iguales == text){
        return array.indexOf(text);
    } else {
        return "No hay coincidencias";
    }


};

console.log(findArrayIndex(bichos, "sadasdsad"));