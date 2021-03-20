import { filterName } from './data.js';
//si tenemos mas funciones desde aqui las debemos escribri para importarlas

// import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';
import data from './data/rickandmorty/rickandmorty.js';

console.log(data.results);

const todosLosPersonajes= data.results;



document.getElementById("characters").addEventListener("click",myFunction);


function myFunction() {

    for (let i=0;i<todosLosPersonajes.length;i++){

        const nuevoContenedor= document.getElementById("contenerdorpersonajes");
        let nuevoElemento = document.createElement("div");
        let nuevaImagen = document.createElement("img");
        let nuevoNombre = document.createElement("p")
        nuevoElemento.className="card";
        nuevoElemento.id=todosLosPersonajes[i].id;
        nuevaImagen.src=todosLosPersonajes[i].image;
        nuevoNombre.innerHTML=todosLosPersonajes[i].name;
      
        nuevoElemento.appendChild(nuevaImagen);
        nuevoElemento.appendChild(nuevoNombre);
        nuevoContenedor.appendChild(nuevoElemento);

    }

}

// var inner = select.querySelectorAll('.result .name');
// console.log (inner);

