// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};
//las podemos usar para las barras de busqueda
export const filterName = (data) => {
  const results = data.map(character => character.name);

  console.log(results);
  return results;
}

export const anotherExample = () => {
  return 'OMG';
};

//declarar una variable ocon la data del .json



// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));}

// setInterval(tick, 1000);
