//import { example } from './data.js';


import data from './data/rickandmorty/rickandmorty.js';

//console.log(example, data);
let dataRyM = Object.create(data);
//dataRyM.displayspecies();
document.getElementById("species").addEventListener("click", displayspecies);
function displayspecies(){
    console.log(typeof species);
    console.log("hola");
    console.log(species, data);
    console.log(dataRyM);
    console.log(typeof dataRyM);
}

// const botonSpecies = document.getElementsByClassName("speciesMenu");
// //const botonSpecies = data;

// for(let i = 0; i< botonSpecies.length; i ++){
//     botonSpecies[i].addEventListener("click", () => {
//       const species = document.getElementById("species");
//       botonSpecies.innerHTML = species;
     
//     });
//  }    console.log(species, data);
//     typeof species;
    
// }




// let characters = data.results;

// console.log(characters);

// document.getElementById("parrafo").appendChild = characters;
// // document.getElementById("characters").addEventListener("onsubmit",myFunction);

// function myFunction() {
//   var btn = document.createElement("BUTTON");
//   btn.innerHTML = "CLICK ME";
//   document.body.appendChild(btn);
 
