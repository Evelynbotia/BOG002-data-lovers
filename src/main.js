import { example } from './data.js';


import data from './data/rickandmorty/rickandmorty.js';

//console.log(example, data);


const botonSpecies = document.getElementsByClassName("speciesMenu");
for(let i = 0; i< botonSpecies.length; i ++){
    botonSpecies[i].addEventListener("click", () => {
      const birthPlace = document.getElementById("birthPlace");
      birthPlace.style.display = "block";
    });
    
    console.log(birthPlace);
    
}




// let characters = data.results;

// console.log(characters);

// document.getElementById("parrafo").appendChild = characters;
// // document.getElementById("characters").addEventListener("onsubmit",myFunction);

// function myFunction() {
//   var btn = document.createElement("BUTTON");
//   btn.innerHTML = "CLICK ME";
//   document.body.appendChild(btn);
// }
