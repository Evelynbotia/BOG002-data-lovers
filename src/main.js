// import { loadOptions } from '@babel/core';
import { filterItems, filterItemsBybutton,filterItemsBybuttonSpecies, OrdenarAscendente, OrdenarDescendente, groupBy, calcularPersonajesPrincipales, calcularGeneroPersonajes } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';

const todosLosPersonajes = data.results;



$(document).ready(main);
var contador = 1;
function main() {
  $('.menu_bar').click(function () {
    // $('nav').toggle(); 
    if (contador == 1) {
      $('nav').animate({
        left: '0'
      });
      contador = 0;
    } else {
      contador = 1;
      $('nav').animate({
        left: '-100%'
      });
    }
  });
}


// document.getElementById("menu_bar").style.display="block";
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
    nuevoDivImg.appendChild(nuevoNombre);
    nuevoDivContent.appendChild(nuevoParrafo);
    nuevoDiv.appendChild(nuevoDivImg);
    nuevoDiv.appendChild(nuevoDivContent);
    contenedorpersonajes.appendChild(nuevoDiv);//crear el div que contiene la imagen y que contiene el nombre copiando el formato de card
    // esto es para mostrar los episodios en un popup
    nuevoDiv.id = todosLosPersonajes[i].name;
   
  }
}


//ejecutamos la busqueda con el keyup y la funcion filter name que esta en data.js

let busquedaInput = document.getElementById("filtrarBusqueda");
busquedaInput.addEventListener("keyup", ejecutarBusqueda);
function ejecutarBusqueda() {
  let parametroBusqueda = busquedaInput.value;
  if (parametroBusqueda === "") {
    showCards(todosLosPersonajes);
  } else {
    let resultados = filterItems(todosLosPersonajes, parametroBusqueda);
    showCards(resultados);
    console.log(resultados);
    console.log(resultados.length);
  }
}


 //Funcionalidad ordenado AZ

 let botonOrdenarAscendente = document.getElementById("botonOrdenarA-Z");
 botonOrdenarAscendente.addEventListener("click", ejecutarOrdenDescendente);
 document.getElementById("personajes").style.display = "";
 function ejecutarOrdenDescendente() {
   let personajesOrdenadosDes = OrdenarAscendente(todosLosPersonajes);
   showCards(personajesOrdenadosDes);
   console.log(personajesOrdenadosDes);
 
 
   //Funcionalidad ordenado ZA
 
 }
 let botonOrdenarDescendente = document.getElementById("botonOrdenarZ-A");
 botonOrdenarDescendente.addEventListener("click", ejecutarOrdenAscendente);
 document.getElementById("personajes").style.display = "";//preguntar que hace la cadena
 function ejecutarOrdenAscendente() {
   let personajesOrdenados = OrdenarDescendente(todosLosPersonajes);
   showCards(personajesOrdenados);
   
 }

//ejecutamos el filtro por planetas
let btnDimensions = document.getElementById("seccionDimensiones");
btnDimensions.addEventListener("click", listLocations);
function listLocations() {
  document.getElementById("containerBusqueda").style.display = "none";
  document.getElementById("personajes").style.display = "none";
  let planetas = [];
  // creamos un array con todos los planetas aca hay un array creado por cada planeta encontrado dentro de los objetos
  for (let i = 0; i < todosLosPersonajes.length; i++) {
    planetas.push(todosLosPersonajes[i].location.name);
  }
  let planetasDiferentes = [];
  planetas.forEach((item) => {
    if (planetasDiferentes.includes(item)) { //no hacer nada
    } else { planetasDiferentes.push(item) }
  })
  let contenedorPlanetas = document.getElementById("locations");
  contenedorPlanetas.innerHTML = "";
  let mostrarPlanetas = planetasDiferentes.map(function (locaciones) {
    const nuevoplaneta = document.createElement("button");
    nuevoplaneta.className = "classLocations";
    nuevoplaneta.innerHTML = locaciones;
    nuevoplaneta.id = locaciones;
    contenedorPlanetas.appendChild(nuevoplaneta);
    // console.log(locaciones)
    nuevoplaneta.addEventListener('click', showPlanets);
    return nuevoplaneta;
  })
  // console.log(mostrarPlanetas);
  console.log(planetasDiferentes);
  let volverPlanetas = document.getElementById("locations").style.display = "";
  const placeLocations = document.getElementById("locations");
  placeLocations.style.display = "block";
  document.getElementById("viewStatistics").style.display = "none";
  document.getElementById("species").style.display = "none";
  console.log(volverPlanetas);
}

//Mostrar planetas
function showPlanets(event) {
  let planetValue = event.currentTarget.id;
  console.log(planetValue);
  let resultados = filterItemsBybutton(todosLosPersonajes, planetValue);
  document.getElementById("personajes").style.display = ""; //preguntar cadena vacia
  showCards(resultados);
}

//ejecutamos el filtro por especies


let seccionSpecies=document.getElementById("seccionSpecies");
seccionSpecies.addEventListener("click",groupsByEspecies);
function groupsByEspecies(){
let data= todosLosPersonajes;
let imprimirSpecies= document.getElementById("species");
let groupSpecies = groupBy(data, "species" );
imprimirSpecies.innerHTML= groupSpecies;
console.log( groupSpecies);
document.getElementById("species").style.display= "block";
document.getElementById("locations").style.display= "none";
document.getElementById("personajes").style.display= "none";
document.getElementById("viewStatistics").style.display= "none";
console.log(Object.values(groupsByEspecies))
}

let btnSpecies = document.getElementById("seccionSpecies");
btnSpecies.addEventListener("click", listaSpecies);
function listaSpecies() {
  document.getElementById("containerBusqueda").style.display = "none";
  document.getElementById("personajes").style.display = "none";
  let especies = [];// creamos un array con todos los planetas aca hay un array creado por cada planeta encontrado dentro de los objetos
  for (let i = 0; i < todosLosPersonajes.length; i++) {
    especies.push(todosLosPersonajes[i].species);
  }
  let speciesDiferentes= [];
  especies.forEach( (species) => {
    if (speciesDiferentes.includes(species)) { //no hacer nada
    } else { speciesDiferentes.push(species) }
  })
  let contenedorSpecies = document.getElementById("species");
  contenedorSpecies.innerHTML = "";
  let mostrarSpecies = speciesDiferentes.map(function (species) {
    const nuevoSpecie = document.createElement("button");
    nuevoSpecie.className ="classLocations";
    nuevoSpecie.innerHTML = species;
    nuevoSpecie.id = species;
    contenedorSpecies.appendChild(nuevoSpecie);
    nuevoSpecie.addEventListener('click', verSpecie);
    return nuevoSpecie;
  })
  let volverSpecie = document.getElementById("species").style.display = "";
  const speciesPersonaje = document.getElementById("species");
  speciesPersonaje.style.display = "block";
  document.getElementById("viewStatistics").style.display= "none";
  document.getElementById("locations").style.display= "none";
  console.log(volverSpecie);
}

function verSpecie(event) {
  let specieValue = event.currentTarget.id;
  console.log(specieValue);
  let resultadoSpecies = filterItemsBybuttonSpecies(todosLosPersonajes, specieValue);
  document.getElementById("personajes").style.display = ""; //preguntar cadena vacia
  showCards(resultadoSpecies);
}
 

//Funcionalidad boton seccion perposanjes

let clickSeccionPersonajes = document.getElementById("seccionPersonajes");
clickSeccionPersonajes.addEventListener("click", seccionPersonajes);
function seccionPersonajes() {
  showCards(todosLosPersonajes);
  document.getElementById("containerBusqueda").style.display = "block";
  document.getElementById("personajes").style.display = "";
  document.getElementById("locations").style.display = "none";
  document.getElementById("species").style.display = "none";
  document.getElementById("viewStatistics").style.display = "none";
}

//Seccion Estadisticas

let clickMostrarEstadisticas = document.getElementById("seccionEstadisticas");
clickMostrarEstadisticas.addEventListener("click", mostrarSeccionEstadisticas);
function mostrarSeccionEstadisticas() {
  document.getElementById("viewStatistics").style.display = "block";
  document.getElementById("species").style.display = "none";
  document.getElementById("locations").style.display = "none";
  document.getElementById("personajes").style.display = "none";
}
const resulEstadisticasPersonajesPrincipales = calcularPersonajesPrincipales(todosLosPersonajes);
const ctxPersonajesPrincipales = document.getElementById('graficoPersonajesPrincipales').getContext('2d');
let graficoPersonajesPrincipales = new Chart(ctxPersonajesPrincipales, {
  type: 'polarArea',
  data: {
    labels: ['Rick', 'Morty', 'Summer', 'Beth', 'Jerry'],
    datasets: [{
      label: 'Personajes Principales',
      data: resulEstadisticasPersonajesPrincipales,
      backgroundColor: [
        'rgba(178, 255, 89, 0.4)',
        'rgba(29, 233, 182, 0.4)',
        'rgba(118, 255, 3, 0.4)',
        'rgba(255, 64, 129, 0.4)',
        'rgba(175, 180, 43, 0.4)',
        'rgba(255, 110, 64, 0.4)'
      ],
      borderColor: [
        'rgba(178, 255, 89, 1)',
        'rgba(29, 233, 182, 1)',
        'rgba(118, 255, 3, 1)',
        'rgba(255, 64, 129, 1)',
        'rgba(175, 180, 43, 1)',
        'rgba(255, 110, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    legend: {
      labels: {
        fontColor: 'white',
      }
    }
  }
});
// grafica de barras
const resulEstadisticasGenero = calcularGeneroPersonajes(todosLosPersonajes);
const ctxGenero = document.getElementById('graficoGeneroPersonajes').getContext('2d');
let graficoGenero = new Chart(ctxGenero, {
  type: 'bar',
  data: {
    labels: ['Female', 'Male', 'Genderless', 'unknown'],
    datasets: [{
      label: 'Género',
      data: resulEstadisticasGenero,
      backgroundColor: [
        'rgba(178, 255, 89, 0.4)',
        'rgba(29, 233, 182, 0.4)',
        'rgba(118, 255, 3, 0.4)',
        'rgba(255, 64, 129, 0.4)',
        'rgba(175, 180, 43, 0.4)',
        'rgba(255, 110, 64, 0.4)'
      ],
      borderColor: [
        'rgba(178, 255, 89, 1)',
        'rgba(29, 233, 182, 1)',
        'rgba(118, 255, 3, 1)',
        'rgba(255, 64, 129, 1)',
        'rgba(175, 180, 43, 1)',
        'rgba(255, 110, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          fontColor: 'white',
        }
      }],
      xAxes: [{
        ticks: {
          fontColor: 'white',
        }
      }],
    },
    legend: {
      labels: {
        fontColor: 'white',
      }
    }
  }
});

