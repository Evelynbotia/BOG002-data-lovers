// import { loadOptions } from '@babel/core';
import { filterItems, } from './data.js';
//si tenemos mas funciones desde aqui las debemos escribri para importarlas

//con estas funciones se acciona el nav 
$(document).ready(function () {
  $('#icon').click(function () {
    $('ul').toggleClass('show')
  });

});

import data from './data/rickandmorty/rickandmorty.js';

// console.log(data.results);

const todosLosPersonajes = data.results;


showCards(todosLosPersonajes);

function showCards(resultadoPersonajes) {
  let contenedorpersonajes = document.getElementById("personajes");// creo las variables la ubicacion a remplazar
  contenedorpersonajes.innerHTML = "";
  for (let i = 0; i < resultadoPersonajes.length; i++) {


    let nuevoDiv = document.createElement("div");// le estoy diciendo que debe crear un nuevo div
    let nuevaImagen = document.createElement("img");// le estoy diciendo que debe crear una imagen
    let nuevoDivImg = document.createElement("div");
    let nuevoNombre = document.createElement("h1");// le estoy diciendo que debe crear un parrafo
    let nuevoParrafo = document.createElement("h2");
    let nuevoDivContent = document.createElement("div")
    nuevoDiv.className = "card";//s ele asigna la class card al div nuevo elemento
    nuevoDivImg.className = "imgBx";
    nuevoDivContent.className = "content";


    nuevaImagen.src = resultadoPersonajes[i].image;
    nuevoNombre.innerHTML = resultadoPersonajes[i].name;
    nuevoParrafo.innerHTML = "Species: " + resultadoPersonajes[i].species + " <br>Gender: " + resultadoPersonajes[i].gender + "<br>Status: " + resultadoPersonajes[i].status + "<br> Origin: " + resultadoPersonajes[i].origin.name + "<br> Type: " + resultadoPersonajes[i].type;



    nuevoDivImg.appendChild(nuevaImagen);//sonre el nuevo elemento se va acrear  la imagen 
    nuevoDivContent.appendChild(nuevoNombre);
    nuevoDivContent.appendChild(nuevoParrafo);
    nuevoDiv.appendChild(nuevoDivImg);
    nuevoDiv.appendChild(nuevoDivContent);
    contenedorpersonajes.appendChild(nuevoDiv);//crear el div que contiene la imagen y que contiene el nombre copiando el formato de card

    // esto es para mostrar los episodios en un popup
    nuevoDiv.id = todosLosPersonajes[i].id

    nuevoDiv.addEventListener('click', showEpisodes);
  }


}
//esto es para mostrar los episodios en un popup



function showEpisodes(event) {

  document.getElementById("modalPopup").style.display = "block";
  let id = event.currentTarget.id;
  console.log(id);
  let infoObjectById = todosLosPersonajes.find(elemento => elemento.id == id)
  console.log(infoObjectById);
  let contenedorpersonajes = document.getElementById("modalPopup");// creo las variables la ubicacion a remplazar

  let showBirthPlace = infoObjectById.origin.name;
  let newBirthPlace = document.createElement("h1");
  newBirthPlace.innerHTML = showBirthPlace;
  contenedorpersonajes.appendChild(newBirthPlace);
}


let busquedaInput = document.getElementById("filtrarBusqueda");
busquedaInput.addEventListener("keyup", ejecutarBusqueda);

function ejecutarBusqueda() {
  let parametroBusqueda = busquedaInput.value;

  let resultados = filterItems(todosLosPersonajes, parametroBusqueda);

  showCards(resultados);
}



document.getElementById("seccionDimensiones").addEventListener("click", listLocations);


function listLocations() {
  document.getElementById("personajes").style.display = "none";
  document.getElementById("filtrarBusqueda").style.display ="none";

  let planetas = [];
  // creamos un array con todos los planetas
  for (let i = 0; i < todosLosPersonajes.length; i++) {
    planetas.push(todosLosPersonajes[i].location.name);
  }
  // console.log(planetas);
  // let planetasUnicos =[...new Set(planetas)];
  // console.log( planetasUnicos);
    
  let planetasDiferentes = [];
  planetas.forEach(
    (item) => {
      if (planetasDiferentes.includes(item)) { //no hacer nada
      } else { planetasDiferentes.push(item) }
    })
  console.log(planetasDiferentes);

  let mostrarPlanetas = planetasDiferentes.map(function(locaciones){
    return '<button>'+locaciones+'</button>'
  })
  document.getElementById("locations").innerHTML = mostrarPlanetas;
  
  
}
 


const mostrarPlanetas = document.getElementsByClassName("classLocations");
for (let i = 0; i < mostrarPlanetas.length; i++) {
 
  mostrarPlanetas[i].addEventListener("click", () => {
    // Buscamos el div que contiene la vista de los chacarcters
    mostrarPlanetas.id =  mostrarPlanetas[i].location;
    console.log(mostrarPlanetas.id);
    console.log(mostrarPlanetas[i]);
    const showDimensiones = document.getElementById("personajes");
    showDimensiones.style.display = "block";
  
  });
  // console.log(mostrarPlanetas[i]);
}