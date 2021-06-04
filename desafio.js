const buscarDisco = function(url){
  // Fetch es una funcion incorporada en JS que retorna una promesa
    return fetch(url).then(response => {
      // procesar los datos de res para que se parezcan a una estructura de obj
      // paso 1: console-loguear la respuesta y ver cómo parsearla
      // console.log('contenido total', response.json());   la respuesta del .json() es una promesa
      return response.json()
    }, error => {
      console.log(new Error(error.message));
    }).then(data => {
      console.log('data:', data);
      // paso 2: armar datos que necesita
      // hacer un arreglo con los veinte primeros
      let veinte = (data.slice(0, 20));   // slice "parte desde indice 0 y entrega 20 objetos"
      
       // paso 3: retornar esa variable.
        console.table(veinte);
        return veinte;
    })
};


let parrafo = document.getElementById('parrafo');    // donde insertar resultado
console.log('parrafo:', parrafo);

const funcionAsincrona = async function(parrafo, url) {
    try {                                                           
      const api = await buscarDisco(url).then(function(res) {  // respuesta es el contenido de promesa
        console.log('respuesta:', res);                        // lo que esta dentro del then espera el resultado
        // iterar arreglo y hacer el innerAdjacentHTML para cada objeto del arreglo
        parrafo.insertAdjacentHTML('afterbegin', `<span>Fecha de publicacion ${res.title}</span>`);   // haciendo que la respuesta se pinte en el parrafo

        // hacer una lista con spans para demostrar que vienen los datos / todos los datos / desplegar de forma bonita eso. 
        






      });
      return api
    } catch (error) {
      console.log('error', error);
    }
  }

funcionAsincrona(parrafo, 'https://jsonplaceholder.typicode.com/photos');