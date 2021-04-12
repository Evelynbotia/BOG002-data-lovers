// import { loadOptions } from '@babel/core';
import { filterItems,filterItemsBybutton } from './data.js';
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
console.log("todosLosPersonajes");
console.log(todosLosPersonajes);
console.log(typeof todosLosPersonajes);

showCards(todosLosPersonajes);

function showCards(resultadoPersonajes) {
  const contenedorpersonajes = document.getElementById("personajes");// creo las variables la ubicacion a remplazar
  contenedorpersonajes.innerHTML = "";
  for (let i = 0; i < resultadoPersonajes.length; i++) {
    const nuevoDiv = document.createElement("div");// le estoy diciendo que debe crear un nuevo div
    const nuevaImagen = document.createElement("img");// le estoy diciendo que debe crear una imagen
    const nuevoDivImg = document.createElement("div");
    const nuevoNombre = document.createElement("h1");// le estoy diciendo que debe crear un parrafo
    const nuevoParrafo = document.createElement("h2");
    const nuevoDivContent = document.createElement("div")
    //le asignamos las clases a los div que hemos creado  
    nuevoDiv.className = "card";
    nuevoDivImg.className = "imgBx";
    nuevoDivContent.className = "content";
    //le asignamos el contenido
    nuevaImagen.src = resultadoPersonajes[i].image;
    nuevoNombre.innerHTML = resultadoPersonajes[i].name;
    nuevoParrafo.innerHTML = "Species: " + resultadoPersonajes[i].species + " <br>Gender: " + resultadoPersonajes[i].gender + "<br>Status: " + resultadoPersonajes[i].status + "<br> Origin: " + resultadoPersonajes[i].origin.name + "<br> Type: " + resultadoPersonajes[i].type;
    //realizamos la estructura con el appendchild
    nuevoDivImg.appendChild(nuevaImagen);//sonre el nuevo elemento se va acrear  la imagen 
    nuevoDivContent.appendChild(nuevoNombre);
    nuevoDivContent.appendChild(nuevoParrafo);
    nuevoDiv.appendChild(nuevoDivImg);
    nuevoDiv.appendChild(nuevoDivContent);
    contenedorpersonajes.appendChild(nuevoDiv);//crear el div que contiene la imagen y que contiene el nombre copiando el formato de card
    // esto es para mostrar los episodios en un popup
    nuevoDiv.id = todosLosPersonajes[i].name;
    nuevoDiv.addEventListener('click', showEpisodes);
  }
}
//esto es para mostrar los episodios en un popup
function showEpisodes(event) {

  document.getElementById("modalPopup").style.display = "block";
  let id = event.currentTarget.id;
  console.log(id); // me muestra el id
  let infoObjectById = todosLosPersonajes.find(elemento => elemento.name == id)
  let contenedorpersonajes = document.getElementById("modalPopup");// creo las variables la ubicacion a remplazar
  let showBirthPlace = infoObjectById.origin.name;
  let newBirthPlace = document.createElement("h1");
  newBirthPlace.innerHTML = showBirthPlace;
  contenedorpersonajes.appendChild(newBirthPlace);
}

//ejecutamos la busqueda con el keyup y la funcion filter name que esta en data.js
let busquedaInput = document.getElementById("filtrarBusqueda");
busquedaInput.addEventListener("keyup", ejecutarBusqueda);

function ejecutarBusqueda() {
  let parametroBusqueda = busquedaInput.value;
  let resultados = filterItems(todosLosPersonajes, parametroBusqueda);
  showCards(resultados);
}

//ejecutamos el filtro por planetas
let btnDimensions = document.getElementById("seccionDimensiones");
btnDimensions.addEventListener("click", listLocations);

function listLocations() {

  document.getElementById("containerBusqueda").style.display = "none";
  // document.getElementById("filtrarBusqueda").style.display = "none";

  let planetas = [];
  // creamos un array con todos los planetas aca hay un array creado por cada planeta encontrado dentro de los objetos
  for (let i = 0; i < todosLosPersonajes.length; i++) {
    planetas.push(todosLosPersonajes[i].location.name);
  }
  console.log("planetas");
  console.log(planetas);
  console.log(typeof planetas);

  let planetasDiferentes = [];

  planetas.forEach(
    (item) => {
      if (planetasDiferentes.includes(item)) { //no hacer nada
      } else { planetasDiferentes.push(item) }
    })
    console.log("planetasDiferentes");
  console.log(planetasDiferentes);
  console.log(typeof planetasDiferentes);
  // console.log(planetasDiferentes[5]);

  let mostrarPlanetas = planetasDiferentes.map(function (locaciones) {
    //  const botonesPlanetas= `<button value=${locaciones}>`+locaciones+`</button>`;
    const contenedorPlanetas = document.getElementById("locations");
    const nuevoplaneta = document.createElement("button");
    // nuevoplaneta.className= locaciones;
    nuevoplaneta.innerHTML = locaciones;
    nuevoplaneta.id = locaciones;
    contenedorPlanetas.appendChild(nuevoplaneta);
    nuevoplaneta.addEventListener('click', showPlanets);

    return nuevoplaneta;

  })
  console.log("mostrarPlanetas");
  console.log(mostrarPlanetas);
  console.log(typeof mostrarPlanetas);
  // document.getElementById("locations").innerHTML = mostrarPlanetas;

}
 //ejecutamos el filtro por status
document.getElementById("seccionEstatus").addEventListener("click", listStatus);
function listStatus() {
  document.getElementById("personajes").style.display = "none";
  let status = [];
  // creamos un array con todos los planetas
  for (let i = 0; i < todosLosPersonajes.length; i++) {
    status.push(todosLosPersonajes[i].status);
  }
  let estatusDiferentes = [];
  status.forEach(
    (item) => {
      if (estatusDiferentes.includes(item)) { //no hacer nada
      } else { estatusDiferentes.push(item) }
    })
  console.log(estatusDiferentes);
  let mostrarstatus = estatusDiferentes.map(function (status) {
    return '<button>' + status + '</button>'
  })
  document.getElementById("locations").innerHTML = mostrarstatus;
}

// document.getElementById("seccionPersonajes").addEventListener("click", listCharacters);

function listCharacters() {
  let placecharacters = document.getElementById("containerBusqueda");

  placecharacters.style.display = "block";
  // document.getElementById("personajes").style.display = "block";
 const placeLocations = document.getElementById("locations");
 placeLocations.style.display = "none";
}

document.getElementById("seccionPersonajes").onclick=function(){
  listCharacters();
}

function showPlanets(event) {

  let planetValue = event.currentTarget.id;
  console.log(planetValue);
  let resultados = filterItemsBybutton(todosLosPersonajes, planetValue);
  showCards(resultados);
}

