// estas funciones son de ejemplo

// export const example = () => {
//   return 'example';
// };
//las podemos usar para las barras de busqueda

// export const getDimensions = (data) => data.map(location => location.dimension);


// export const filterName = (data) => {
//   const results = data.map(character => character.name);

//   // console.log(results)
//   return results;
// }

// export const getDimensions = (data) => data.map(location => location.name);



export const filterItems = function(personajes, query){//funcion de expresion 

    function condicionDeFiltrado(personajeObjeto) {
      const nombrepersonaje = personajeObjeto.location.name.toLowerCase();
      const coincidencia = query.toLowerCase(); // query me permite buscar en cualquier parte del objeto la coincidencia 
      const indiceCalculado = nombrepersonaje.indexOf(coincidencia);// cuenta la ocurrencia de coincidencia sobre nombre personajes como es suseptible a mayusculas por eso hicimos el tolower case 
      console.log(indiceCalculado);
  
      return indiceCalculado > -1;// lo hacemos mayor a -1 para que nos muestre coincidencias, index of al no encontrar muestra -1
    }
    return personajes.filter(condicionDeFiltrado);
  }

  // export const filterItems = function(personajes, query){//funcion de expresion 

  //   function condicionDeFiltrado(personajeObjeto) {
  //     const nombrepersonaje = personajeObjeto.location.name.toLowerCase();
  //     const coincidencia = query.toLowerCase(); // query me permite buscar en cualquier parte del objeto la coincidencia 
  //     const indiceCalculado = nombrepersonaje.indexOf(coincidencia);// cuenta la ocurrencia de coincidencia sobre nombre personajes como es suseptible a mayusculas por eso hicimos el tolower case 
  //     console.log(indiceCalculado);
  
  //     return indiceCalculado > -1;// lo hacemos mayor a -1 para que nos muestre coincidencias, index of al no encontrar muestra -1
  //   }
  //   return personajes.filter(condicionDeFiltrado);
  // }






