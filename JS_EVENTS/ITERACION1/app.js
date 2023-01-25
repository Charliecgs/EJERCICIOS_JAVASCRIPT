// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
// evento click que ejecute un console log con la información del evento del click

const boton = document.querySelector("#btnToClick");

boton.addEventListener("click", () => {
    console.log("Has hecho click en el boton");
})

//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const foc = document.querySelector(".focus");

foc.addEventListener("focus", (e) => {
    console.log(`El input tiene de valor '${e.target.value}'`);
});

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

const inpt = document.querySelector(".value");

inpt.addEventListener("input", (e) => {
    console.log(`El valor del input es '${e.target.value}'`);
});