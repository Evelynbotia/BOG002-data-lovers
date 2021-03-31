import { filterName, } from './data.js';
//si tenemos mas funciones desde aqui las debemos escribri para importarlas

//con estas funciones se acciona el nav 
$(document).ready(function(){
  $('#icon').click(function(){
    $('ul').toggleClass('show')
  });
   
});
// import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';
import data from './data/rickandmorty/rickandmorty.js';

console.log(data.results);

const todosLosPersonajes= data.results;

document.getElementById("fichaPersonajes").style.display ="none";

for (let i=0;i<todosLosPersonajes.length;i++){

  let contenedorpersonajes= document.getElementById("personajes");// creo las variables la ubicacion a remplazar
  let nuevoDiv = document.createElement("div");// le estoy diciendo que debe crear un nuevo div
  let nuevaImagen = document.createElement("img");// le estoy diciendo que debe crear una imagen
  let nuevoDivImg = document.createElement ("div");
  let nuevoNombre = document.createElement("h1");// le estoy diciendo que debe crear un parrafo
  let nuevoParrafo = document.createElement("h2");
  let nuevoDivContent = document.createElement("div")
  nuevoDiv.className="card";//s ele asigna la class card al div nuevo elemento
  nuevoDivImg.className="imgBx";
  nuevoDivContent.className ="content";
       
  nuevaImagen.src=todosLosPersonajes[i].image;
  nuevoNombre.innerHTML= todosLosPersonajes[i].name;
  nuevoParrafo.innerHTML = "Species: " +  todosLosPersonajes[i].species + " <br>Gender: " + todosLosPersonajes[i].gender + "<br>Status: " + todosLosPersonajes[i].status + "<br> Origin: " + todosLosPersonajes[i].origin.name + "<br> Type: " + todosLosPersonajes[i].type;
  

  nuevoDivImg.appendChild(nuevaImagen);//sonre el nuevo elemento se va acrear  la imagen 
  nuevoDivContent.appendChild(nuevoNombre);
  nuevoDivContent.appendChild(nuevoParrafo);
  nuevoDiv.appendChild(nuevoDivImg);
  nuevoDiv.appendChild(nuevoDivContent);
  contenedorpersonajes.appendChild(nuevoDiv);//crear el div que contiene la imagen y que contiene el nombre copiando el formato de card
   
  nuevoDiv.id= todosLosPersonajes[i].id


  
     //estamos creando el evento click para mostrar la funcion.
//   let clickMostrarEpisodios = nuevoDiv.addEventListener('click', mostrarEpisodios);
}
 
// // esta funcion nos va permitir mostrar los episodios del personaje al que damos click
// function mostrarEpisodios(event){
 
//  let id =event.currentTarget.id;
//  let infoObjectById = todosLosPersonajes.find(elemento => elemento.id==id)
// //  console.log(infoObjectById);

//  let showEpisodios = infoObjectById.episode;
//   console.log(showEpisodios);

//  }
 let busquedaInput= document.getElementById("filtrarBusqueda");
 busquedaInput.addEventListener("keyup", filtrarBusqueda);
 function filtrarBusqueda(){
   let parametroBusqueda = busquedaInput.value;
   
  let resultados = filterItems(todosLosPersonajes,parametroBusqueda); // ['apple', 'grapes']
  console.log(resultados);
  }


/**
 * Filtra la matríz en función de un criterio de búsqueda (query)
 */
function filterItems(personajes,query) {
  function condicionDeFiltrado(personajeObjeto) {
    const nombrepersonaje = personajeObjeto.name.toLowerCase ();
    query =query.toLowerCase ();
    let indiceCalculado =  nombrepersonaje.indexOf(query);
   
    return indiceCalculado > -1;
  }
  return personajes.filter(condicionDeFiltrado);

}


 // ['banana', 'mango', 'orange']