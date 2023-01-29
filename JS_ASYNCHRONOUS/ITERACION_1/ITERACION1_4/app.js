// 1.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición
// a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
// EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser
// de MZ.

const getInput = document.querySelector(".getInput");
const getButton = document.querySelector(".buton");
const getContainer = document.querySelector(".container");

const baseUrl = "https://api.nationalize.io";

const getName = async () => {
  const data = await fetch(`${baseUrl}?name=${getInput.value}`);
  const transformJson = await data.json();
  console.log(transformJson);

  const newP = document.createElement("p");

  let array = [];

  for (const country of transformJson.country) {
    array.push(country);
  }

  const newPContent = document.createTextNode(
    `El nombre de ${transformJson.name} tiene un ${array[0].probability} de probabilidad de ser de ${array[0].country_id} y tiene una probabilidad de ${array[1].probability} de ser de ${array[1].country_id} `
  );
  newP.appendChild(newPContent);
  let crearEliminar = document.createElement("button");
  crearEliminar.innerHTML += `X`;
  newP.appendChild(crearEliminar);
  crearEliminar.classList.add("eliminarBoton");
  getContainer.appendChild(newP);
  const botonEliminar = document.querySelector(".eliminarBoton");
  botonEliminar.addEventListener("click", () => {
    newP.remove();
  });
  newP.appendChild(newPContent);
  getContainer.appendChild(newP);
};

getButton.addEventListener("click", () => {
  getInput.addEventListener("input", () => {});
  getName(getInput.value);
});
