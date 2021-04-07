import { filterItems,getDimensions } from './data.js';
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
  let showBirthPlace = infoObjectById.origin.name;
  const showEpisode = infoObjectById.episode; //este
  console.log(showEpisode);
  let contenedorpersonajes = document.getElementById("modalPopup");// creo las variables la ubicacion a remplazar
  let newEpisode = document.createElement("h1");//este
  let newBirthPlace = document.createElement("h1");
  newEpisode.innerHTML = newEpisode;//este
  contenedorpersonajes.appendChild(newEpisode);//este
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



document.getElementById("seccionDimensiones").addEventListener("click", showDimensions);


function showDimensions() {
  document.getElementById("personajes").style.display = "none";
 
  let planetas = [];  
  for (let i =0; i < todosLosPersonajes.length; i++) {
    planetas.push(todosLosPersonajes[i].location.name);
      
  }
  console.log(planetas);
 

 let planetasDiferentes=[];
 planetas.forEach(
 (item) => {
    if (planetasDiferentes.includes(item)){
      //no hacer nada
    }
    else{
      planetasDiferentes.push(item)
    }
  })
 console.log(planetasDiferentes);

 for (let i =0; 1 < planetasDiferentes.length; i++){
   let location = document.getElementById("imprimirLocations");
   let newLocation = document.createElement("h1");
   newLocation.textContent = planetasDiferentes[i];
   location.appendChild(newLocation);

   console.log(planetasDiferentes.length);
   console.log(location);
   console.log(newLocation);
   
 }
}