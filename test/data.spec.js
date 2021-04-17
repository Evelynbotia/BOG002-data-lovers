// import { example, anotherExample } from '../src/data.js';


// describe('example', () => {
//   it('is a function', () => {
//     expect(typeof example).toBe('function');
//   });

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
import funciones from '../src/data';
import data from '../src/data/rickandmorty/rickandmorty.json';

describe('funciones.filterItems', () => {
  const todosLosPersonajes = data.results.slice()

  it('Es una funcion', () => {
    expect(typeof funciones.filterItems).toBe('function');
  });

  // it('Deberia devolver un objeto para Humano', () => {
  //   expect(typeof funciones.filterItems(todosLosPersonajesPrueba, "Human")).toBe('object');
  // });

  // it('Deberia devolver Pikachu para tipo Electrico', () => {
  //   expect(funciones.filterData(todosLosPersonajesPrueba, "Electrico")[0].name).toEqual('Pikachu');
  // });

  it('Deberia devolver un arreglo de 3 elementos para la coincidencia jess', () => {
    expect(funciones.filterItems(todosLosPersonajes, "jess")).toHaveLength(3);
  });
 });