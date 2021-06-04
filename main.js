import { buscarDisco as buscarDiscoCallback } from './callback.js';
import { buscarDisco as buscarDiscoPromesas } from './promesas.js';

const idDiscoParametro1 = 'chanchoEnPiedra';
const idDiscoParametro2 = 'blackStar';
const idDiscoParametro3 = 'johnnyCash';

buscarDiscoPromesas(idDiscoParametro1)
    .then((disco) => {
        console.log(disco);
    })
    .catch((err) => {
        console.log(err);
    });

/* buscarDiscoCallback(idDiscoParametro1, (disco1) => {
    buscarDiscoCallback(idDiscoParametro2, (disco2) => {
        buscarDiscoCallback(idDiscoParametro3, (disco3) => {
            console.log(`año: ${disco1.fechaPublicacion} 
                    vs año: ${disco2.fechaPublicacion}
                    vs año: ${disco3.fechaPublicacion}`);
        });
    });
});


buscarDiscoCallback(idDiscoParametro1, (disco) => {
    const cuerpo = document.body;
    const contenedor = document.createElement('div');
    const titulo = document.createElement('h1');
    titulo.innerHTML = disco.fechaPublicacion;
    contenedor.appendChild(titulo);
    cuerpo.appendChild(contenedor);
}); */

console.log('esto es el fin de un código sincrónico');

let parrafo = document.getElementById('parrafo');    // donde insertar resultado
console.log('parrafo:', parrafo);

const funcionAsincrona = async function(parrafo, id) {
    try {                                                           
      const api = await buscarDiscoPromesas(id).then(function(res) {  // respuesta es el contenido de promesa
        console.log('respuesta:', res);                        // lo que esta dentro del then espera el resultado
        parrafo.insertAdjacentHTML('afterbegin', `<span>Fecha de publicacion ${res.fechaPublicacion}</span>`);                               // haciendo que la respuesta se pinte en el parrafo
      });
      return api
    } catch (error) {
      console.log('error', error);
    }
  }

funcionAsincrona(parrafo, idDiscoParametro2);