import { filterName, } from './data.js';
//si tenemos mas funciones desde aqui las debemos escribri para importarlas

// import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';
import data from './data/rickandmorty/rickandmorty.js';

console.log(data.results);

const todosLosPersonajes= data.results;

//document.getElementById("estructuraPrueba").style.display ="none";

for (let i=0;i<todosLosPersonajes.length;i++){

  let contenedorpersonajes= document.getElementById("personajes");// creo las variables la ubicacion a remplazar
  let nuevoElemento = document.createElement("div");// le estoy diciendo que debe crear un nuevo div
  let nuevaImagen = document.createElement("img");// le estoy diciendo que debe crear una imagen
  let nuevoNombre = document.createElement("h1")// le estoy diciendo que debe crear un parrafo

  nuevoElemento.className="card";//s ele asigna la class card al div nuevo elemento
 
       
  nuevaImagen.src=todosLosPersonajes[i].image;
  nuevoNombre.innerHTML=todosLosPersonajes[i].name;
      
  nuevoElemento.appendChild(nuevaImagen);//sonre el nuevo elemento se va acrear  la imagen 
  nuevoElemento.appendChild(nuevoNombre);
  contenedorpersonajes.appendChild(nuevoElemento);//crear el div que contiene la imagen y que contiene el nombre copiando el formato de card
   
  nuevoElemento.id= todosLosPersonajes[i].id


    nuevoElemento.addEventListener('click', mostrarInfo);
  
  
}
function mostrarInfo(event){
 let id =event.currentTarget.id;
 let infoObjectById = todosLosPersonajes.find(elemento => elemento.id==id)

 console.log(id);
 typeof(id);
  console.log(infoObjectById.name);
 console.log(infoObjectById.status);
 console.log(infoObjectById.species);
 console.log(infoObjectById.type);
 console.log(infoObjectById.gender);
 console.log(infoObjectById.origin);// es un string
 console.log(infoObjectById.location);// es un string
 console.log(infoObjectById.episode);// es un string
 console.log(infoObjectById.url);
 console.log(infoObjectById.created);

}