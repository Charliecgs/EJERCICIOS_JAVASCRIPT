//2.1 Inserta dinamicamente en un html un div vacio con javascript.

const div = document.createElement("div");
document.body.appendChild(div);
console.log(div);

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const div2 = document.createElement("div");
const p = document.createElement("p");

div2.appendChild(p);

document.body.appendChild(div2);

console.log(div2);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const div3 = document.createElement("div");
for (let i = 0; i < 6; i++) {
  const p = document.createElement("p");
  div3.appendChild(p);
}

document.body.appendChild(div3);

console.log(div3);

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const p1 = document.createElement("p");
const pContent = document.createTextNode("Soy dinámico!");

p1.appendChild(pContent);

document.body.appendChild(p1);

console.log(p1);

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const h2a = document.querySelector([".fn-insert-here"]);

const h2Content = document.createTextNode("Wubba Lubba dub dub");

h2a.appendChild(h2Content);

console.log(h2a);
console.log(h2Content);

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

const ul1 = document.createElement("ul");

for (let i = 0; i < apps.length; i++) {
  const li1 = document.createElement("li");
  ul1.appendChild(li1);
  const liContent = document.createTextNode(apps[i]);
  li1.appendChild(liContent);
}

document.body.appendChild(ul1);

console.log(ul1);

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const eliminar = document.querySelectorAll(".fn-remove-me");

for (const key of eliminar) {
    key.remove();
}

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

const enMedio = document.querySelectorAll("div.fn-insert-here");

const p3 = document.createElement("p");

p3.textContent = "Voy en medio!";

document.body.insertBefore(p3, enMedio[1]);

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const dentro = document.querySelectorAll("div.fn-insert-here");

for (const div of dentro) {
    const p5 = document.createElement("p");
    p5.textContent = "Voy en medio!"
    const metido = div.appendChild(p5);
}













