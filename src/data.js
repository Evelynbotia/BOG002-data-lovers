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
      const nombrepersonaje = personajeObjeto.name.toLowerCase();
      const coincidencia = query.toLowerCase(); // query me permite buscar en cualquier parte del objeto la coincidencia 
      const indiceCalculado = nombrepersonaje.indexOf(coincidencia);// cuenta la ocurrencia de coincidencia sobre nombre personajes como es suseptible a mayusculas por eso hicimos el tolower case 
      // console.log(indiceCalculado);
  
      return indiceCalculado > -1;// lo hacemos mayor a -1 para que nos muestre coincidencias, index of al no encontrar muestra -1
    }
    return personajes.filter(condicionDeFiltrado);
  }

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


  export const  groupBy=function(objectArray, property) {
   return objectArray.reduce(function (acumulador, object) {
        let key = object[property]
        if (!acumulador[key]) {
          acumulador[key] = []
        }
        acumulador[key].push(object)
        return acumulador
      },
       {})
      
    }




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