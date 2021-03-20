import { filterName } from './data.js';
//si tenemos mas funciones desde aqui las debemos escribri para importarlas

// import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';
import data from './data/rickandmorty/rickandmorty.js';

console.log(data.results);

const todosLosPersonajes= data.results;



// document.getElementById("characters").addEventListener("click",myFunction);

// function myFunction() {
 
 document.getElementById("container").style.display ="none";
 document.getElementById("personajes").style.display = "block";
    for (let i=0;i<todosLosPersonajes.length;i++){

        
        let contenedorpersonajes= document.getElementById("personajes");// creo las variables la ubicacion a remplazar
        let nuevoElemento = document.createElement("div");// le estoy diciendo que debe crear un nuevo div
        let nuevaImagen = document.createElement("img");// le estoy diciendo que debe crear una imagen
        let nuevoNombre = document.createElement("p")// le estoy diciendo que debe crear un parrafo

        nuevoElemento.className="card";//el div que se creo le copie lo que este en el html con la clase card (copiando formato)
 
        // nuevoElemento.id=todosLosPersonajes[i].id;//dentro del nuevo div tome la propiedad id igualelo a el id de todos los personakes recorriedos por i
        nuevaImagen.src=todosLosPersonajes[i].image;
        nuevoNombre.innerHTML=todosLosPersonajes[i].name;
      
        nuevoElemento.appendChild(nuevaImagen);//sonre el nuevo elemento se va acrear  la imagen 
        nuevoElemento.appendChild(nuevoNombre);
        contenedorpersonajes.appendChild(nuevoElemento);//crear el div que contiene la imagen y que contiene el nombre copiando el formato de card

    }
//} 

// var inner = select.querySelectorAll('.result .name');
// console.log (inner);

