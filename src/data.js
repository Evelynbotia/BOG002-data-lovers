// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

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

var series = [
  {
    name: "Installation",
    dataa: [43934, 52503, 57177]
  },
  {
    name: "Manufacturing",
    dataa: [24916, 24064, 29742]
  },
  {
    name: "Sales & Distribution",
    dataa: [11744, 17722, 16005]
  },
  {
    name: "Project Development",
    dataa: [null, null, 7988]
  },
  {
    name: "Other",
    dataa: [12908, 5948, 8105]
  }
];



    for(let j  = 0; j<series[i].dataa.length; j++){
      
        console.log(series[i].dataa[j]);
    
    }  
