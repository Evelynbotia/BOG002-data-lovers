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


  // nuevoElemento.addEventListener('click', mostrarInfo);
  
  
}

// document.getElementById("specie").style.display ="none";
function mostrarInfo(event){
  let id =event.currentTarget.id;
  let infoObjectById = todosLosPersonajes.find(elemento => elemento.id==id)
 //  console.log(id);
 let showSpecie = infoObjectById.species;
 // console.log(showSpecie);
 let showBirthPlace= infoObjectById.origin.name;
 // console.log(showBirthPlace);
 let contenedorpersonajes= document.getElementById("infoCharactersId");// creo las variables la ubicacion a remplazar
 let newplaceSpecie = document.createElement("h1")
 newplaceSpecie.innerHTML=showSpecie;
 contenedorpersonajes.appendChild(newplaceSpecie);

 let newBirthPlace = document.createElement("h1")
 newBirthPlace.innerHTML=showBirthPlace;
 contenedorpersonajes.appendChild(newBirthPlace);

}
