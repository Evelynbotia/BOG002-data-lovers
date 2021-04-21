
export const filterItems = function(personajes, query){//funcion de expresion 
  const condicionDeFiltrado= (personajeObjeto) => {
    const nombrepersonaje = personajeObjeto.name.toLowerCase();
    const coincidencia = query.toLowerCase(); // query me permite buscar en cualquier parte del objeto la coincidencia 
    const indiceCalculado = nombrepersonaje.indexOf(coincidencia);// cuenta la ocurrencia de coincidencia sobre nombre personajes como es suseptible a mayusculas por eso hicimos el tolower case 
    // console.log(indiceCalculado);
    return indiceCalculado > -1;// lo hacemos mayor a -1 para que nos muestre coincidencias, index of al no encontrar muestra -1
  }
  let personajesfiltrados = personajes.filter(condicionDeFiltrado);
  return personajesfiltrados;
}

// function condicionDelFiltrado(personajesObjecto){
// }
// const condicionDelFiltrado = (personajesObjecto) => {
// }
// const condicionDelFiltrado = function (personajesObjecto){
// }


export const filterItemsBybutton = function(personajes, query){//funcion de expresion 
  function condicionDeFiltrado(personajeObjeto) {
    const nombrepersonaje = personajeObjeto.location.name.toLowerCase();
    const coincidencia = query.toLowerCase(); // query me permite buscar en cualquier parte del objeto la coincidencia 
    const indiceCalculado = nombrepersonaje.indexOf(coincidencia);// cuenta la ocurrencia de coincidencia sobre nombre personajes como es suseptible a mayusculas por eso hicimos el tolower case 
    // console.log(indiceCalculado);
    return indiceCalculado > -1;// lo hacemos mayor a -1 para que nos muestre coincidencias, index of al no encontrar muestra -1
        }
      return personajes.filter(condicionDeFiltrado);
}

export const filterItemsBybuttonSpecies = function(personajes, query){//funcion de expresion 
  function condicionDeFiltradoSpecies(personajeObjeto) {
    const nombreSpecies = personajeObjeto.species.toLowerCase();
    const coincidencia = query.toLowerCase(); // query me permite buscar en cualquier parte del objeto la coincidencia 
    const indiceCalculado = nombreSpecies.indexOf(coincidencia);// cuenta la ocurrencia de coincidencia sobre nombre personajes como es suseptible a mayusculas por eso hicimos el tolower case 
    // console.log(indiceCalculado);
    return indiceCalculado > -1;// lo hacemos mayor a -1 para que nos muestre coincidencias, index of al no encontrar muestra -1
  }
  return personajes.filter(condicionDeFiltradoSpecies);      
}


export const OrdenarDescendente = function (objectPersonajes){
    let personajesOrdenadosDes = objectPersonajes.sort((a,b) =>{
  if(a.name.toLocaleLowerCase()<b.name.toLocaleLowerCase()) return 1;
  if(a.name.toLocaleLowerCase()>b.name.toLocaleLowerCase()) return -1;
  return 0;
  }) 
  return personajesOrdenadosDes;
}
export const  OrdenarAscendente = function (objectPersonajes){
  let personajesOrdenados =objectPersonajes.sort((a,b) =>{
  if(a.name.toLocaleLowerCase()<b.name.toLocaleLowerCase()) return -1;
  if(a.name.toLocaleLowerCase()>b.name.toLocaleLowerCase()) return 1;
  return 0;
}
) 
return personajesOrdenados;
}


// export const  groupBy=function(objectArray, property) {
//  const listadoSpecies = objectArray.reduce(function (acumulador, object) {
//       let key = object[property]
//       if (!acumulador[key]) {
//         acumulador[key] = []
//       }
//       acumulador[key].push(object)
//       return acumulador
//     },{})
//     return [listadoSpecies] 
//   }

export const groupBy= (todosLosPersonajes) => {
  let alien = 0;
  let animal = 0;
  let cronenberg = 0;
  let disease = 0;
  let human = 0;
  let humanoid = 0;
  let mytholog = 0;
  let parasite = 0;
  let poopybutthole = 0;
  let robot = 0;
  let vampire= 0;
  let unknown= 0;
  alien = todosLosPersonajes.filter((character) => character.species.includes('Alien')).length;
  animal = todosLosPersonajes.filter((character) => character.species.includes('Animal')).length;
  cronenberg = todosLosPersonajes.filter((character) => character.species.includes('Cronenberg')).length;
  disease = todosLosPersonajes.filter((character) => character.species.includes('Disease')).length;
  human = todosLosPersonajes.filter((character) => character.species.includes('Human')).length;
  humanoid = todosLosPersonajes.filter((character) => character.species.includes('Humanoid')).length;
  mytholog = todosLosPersonajes.filter((character) => character.species.includes('Mytholog')).length;
  parasite = todosLosPersonajes.filter((character) => character.species.includes('Parasite')).length;
  poopybutthole = todosLosPersonajes.filter((character) => character.species.includes('Poopybutthole')).length;
  robot = todosLosPersonajes.filter((character) => character.species.includes('Robot')).length;
  vampire = todosLosPersonajes.filter((character) => character.species.includes('Vampire')).length;
  unknown = todosLosPersonajes.filter((character) => character.species.includes('Munknown')).length;

  return [alien, animal, cronenberg,disease,human,humanoid,mytholog,parasite,poopybutthole,robot,vampire,unknown];
};

// graficas
export const calcularPersonajesPrincipales = (todosLosPersonajes) => {
  let rick = 0;
  let morty = 0;
  let summer = 0;
  let beth = 0;
  let jerry = 0;
  rick = todosLosPersonajes.filter((character) => character.name.includes('Rick')).length;
  morty = todosLosPersonajes.filter((character) => character.name.includes('Morty')).length;
  summer = todosLosPersonajes.filter((character) => character.name.includes('Summer')).length;
  beth = todosLosPersonajes.filter((character) => character.name.includes('Beth')).length;
  jerry = todosLosPersonajes.filter((character) => character.name.includes('Jerry')).length;
  return [ rick, morty, summer, beth, jerry ];
};
//grafica barra
export const calcularGeneroPersonajes = (todosLosPersonajes) => {
  let female = 0;
  let male = 0;
  let genderless = 0;
  let unknown = 0;
  todosLosPersonajes.forEach((character) => {
      switch (character.gender) {
        case 'Female':
          female += 1;
          break;
        case 'Male':
          male += 1;
          break;
        case 'Genderless':
          genderless += 1;
          break;
        case 'unknown':
          unknown += 1;
          break;
      }
  });
  return [ female, male, genderless, unknown ];
};





