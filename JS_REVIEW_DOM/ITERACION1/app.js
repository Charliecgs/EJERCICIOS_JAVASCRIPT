// 1.1 Basandote en el array siguiente, crea una lista ul > li
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

const ul = document.createElement("ul");
for (const country of countries) {
  const li = document.createElement("li");
  ul.appendChild(li);
  const liValues = document.createTextNode(country);
  li.appendChild(liValues);
}

document.body.appendChild(ul);

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const element = document.querySelectorAll(".fn-remove-me");

for (const item of element) {
  item.remove();
}

console.log(element);

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
// en el div de html con el atributo data-function="printHere".
const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

const ul2 = document.createElement("ul");

for (const car of cars) {
  const li2 = document.createElement("li");
  ul2.appendChild(li2);
  const liValues2 = document.createTextNode(car);
  li2.appendChild(liValues2);
}

const divPedido = document.querySelector("[data-function=printHere]");

divPedido.appendChild(ul2);

// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento
// h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

const uls3 = document.createElement("ul");

for (const item of countries2) {
  const lis3 = document.createElement("div");
  uls3.appendChild(lis3);

  const titles = document.createElement("h4");
  const titleContent = document.createTextNode(item.title);
  titles.appendChild(titleContent);
  lis3.appendChild(titles);

  lis3.innerHTML += ` 
  <img src=${item.imgUrl} alt=${item.title}/>
  `; 
}

document.body.appendChild(uls3);

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
// elemento de la lista.

const uls4 = document.createElement("ul");

for (const item of countries2) {
  const lis3 = document.createElement("div");
  uls4.appendChild(lis3);

  const titles = document.createElement("h4");
  const titleContent = document.createTextNode(item.title);
  titles.appendChild(titleContent);
  lis3.appendChild(titles);

  lis3.innerHTML += ` 
  <img src=${item.imgUrl} alt=${item.title}/>
  `; 
  lis3.classList.add("eliminar");
}

document.body.appendChild(uls4);

const lis5 = document.querySelectorAll(".eliminar");
console.log(lis5);

const creaBoton = document.createElement("button");

document.body.appendChild(creaBoton);

creaBoton.classList.add("boton");

creaBoton.textContent = "Pulsa para eliminar el ultimo elemento";

const botonPulsado = document.querySelector(".boton");

const eliminarElUltimo = () => {
  uls4.removeChild(uls4.lastChild);
}


botonPulsado.addEventListener("click", () => {
  eliminarElUltimo();
});


// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// elementos de las listas que elimine ese mismo elemento del html.

const uls5 = document.createElement("ul");

for (const item of countries2) {
  const lis3 = document.createElement("div");
  uls5.appendChild(lis3);

  const titles = document.createElement("h4");
  const titleContent = document.createTextNode(item.title);
  titles.appendChild(titleContent);
  lis3.appendChild(titles);

  lis3.innerHTML += ` 
  <img src=${item.imgUrl} alt=${item.title}/>
  `; 

  const botonDeCadaUno = document.createElement("button");
  botonDeCadaUno.classList.add("botonParaEliminar")
  lis3.appendChild(botonDeCadaUno);
  botonDeCadaUno.textContent = "Pulsa para eliminar";
  lis3.classList.add("ulClass");

  botonDeCadaUno.addEventListener("click", () => {
    lis3.remove();
  })
}

document.body.appendChild(uls5);






