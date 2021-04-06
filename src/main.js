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

   
  }




}



let busquedaInput = document.getElementById("filtrarBusqueda");
busquedaInput.addEventListener("keyup", ejecutarBusqueda);

function ejecutarBusqueda() {
  let parametroBusqueda = busquedaInput.value;

  let resultados = filterItems(todosLosPersonajes, parametroBusqueda);
  // console.log(resultados);
  showCards(resultados);
}


// function filterItems(personajes, query) {
//   function condicionDeFiltrado(personajeObjeto) {
//     const nombrepersonaje = personajeObjeto.name.toLowerCase();
//     const coincidencia = query.toLowerCase(); // query me permite buscar en cualquier parte del objeto la coincidencia 
//     let indiceCalculado = nombrepersonaje.indexOf(coincidencia);// cuenta la ocurrencia de coincidencia sobre nombre personajes como es suseptible a mayusculas por eso hicimos el tolower case 
//     console.log(indiceCalculado);

//     return indiceCalculado > -1;// lo hacemos mayor a -1 para que nos muestre coincidencias, index of al no encontrar muestra -1
//   }
//   return personajes.filter(condicionDeFiltrado);
// }





document.getElementById("seccionDimensiones").addEventListener("click", showDimensions);
function showDimensions() {

  // document.getElementById("campoprueba").innerHTML="esta pasando algo"
  document.getElementById("personajes").style.display = "none";
  // for (let i = 0; i < resultadoPersonajes.length; i++)
  // let nuevoDiv = document.createElement("div");
  // let nuevoTitulo = document.createElement("h2");
  // nuevoTitulo.innerHTML = resultadoPersonajes[i].species;
  // nuevoDiv.appendChild(nuevoTitulo);
}


