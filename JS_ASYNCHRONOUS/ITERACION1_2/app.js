// 1.2 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando
// fetch() para hacer una consulta a la api cuando se haga click en el botón,
// pasando como parametro de la api, el valor del input.

const getInput = document.querySelector(".getInput");
const getButton = document.querySelector(".buton");
const getContainer = document.querySelector("#container");

const baseUrl = "https://api.nationalize.io";

const getName = async () => {
  const data = await fetch(`${baseUrl}?name=${getInput.value}`);
  const transformJson = await data.json();
  console.log(transformJson);
};

getButton.addEventListener("click", () => {
  getInput.addEventListener("input", () => {});
  getName(getInput.value);
});
