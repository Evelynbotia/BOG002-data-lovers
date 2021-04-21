import { filterItems,filterItemsBybutton,OrdenarAscendente,OrdenarDescendente} from '../src/data.js';
import dataObject from '../src/data/rickandmorty/rickandmorty.js';

const ObjectPrueba = [{"name": "Morty Smith","status": "Alive",},{ "name": "Little Dipper","status": "Alive",},{ "name": "Pencilvester","status": "Dead",},{ "name": "Quantum Rick",
"status": "unknown",},{ "name": "Rick D716-C","status": "Alive",},{  "name": "Rick Sanchez","status": "Dead",},]
const ObjectOrdenadoAsc = [{ "name": "Little Dipper","status": "Alive",},{"name": "Morty Smith","status": "Alive",},{ "name": "Pencilvester","status": "Dead",},
{ "name": "Quantum Rick","status": "unknown",},{ "name": "Rick D716-C","status": "Alive",},{  "name": "Rick Sanchez","status": "Dead",},]
const ObjectOrdenadoDesc = [{  "name": "Rick Sanchez","status": "Dead",},{ "name": "Rick D716-C","status": "Alive",},{ "name": "Quantum Rick","status": "unknown",},
{ "name": "Pencilvester","status": "Dead",},{"name": "Morty Smith","status": "Alive",},{ "name": "Little Dipper","status": "Alive",},]
describe('Prueba que  filterItems es una funcion', () => {
  it('is a function', () => {
    expect(typeof filterItems).toBe('function');
  });
it('cuando busquemos rick nos retorne un array con 73 ', () => {
  expect((filterItems(dataObject,"rick").toHaveLength(73)));
});
});
describe('Prueba que  filterItemsBybutton es una funcion', () => {
  it('is a function', () => {
    expect(typeof filterItemsBybutton).toBe('function');
  });
  it('cuando busquemos pluto nos retorne 6 personajes ', () => {
  expect((filterItemsBybutton (dataObject,"pluto").toHaveLength(6)));
  });
});
  describe('Prueba que OrdenarAscendente es una funcion', () => {
    it('is a function', () => {
      expect(typeof OrdenarAscendente).toBe('function');
    });
  it('Debe ordenarn el object prueba y este debe ser igual al ObjectOrdenadoAsc', () => {
    expect(OrdenarAscendente(ObjectPrueba)).toEqual(ObjectOrdenadoAsc);
  });
});
describe('Prueba que OrdenarDescendente es una funcion', () => {
  it('is a function', () => {
    expect(typeof OrdenarDescendente).toBe('function');
  });
it('Debe ordenarn el object prueba y este debe ser igual al ObjectOrdenadoDesc', () => {
  expect( OrdenarDescendente(ObjectPrueba)).toEqual(ObjectOrdenadoDesc);
});
});
// describe(' organizarlos de forma descendente', () => {
//   it('is a function', () => {
//     expect(typeof organizaAz).toBe('function');
//   });
//   it('returns `Data ordenada`', () => {
//     expect( organizaAz (DataDePrueba)).toEqual(DataOrdenada);
//   });
// });