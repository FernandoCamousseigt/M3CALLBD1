const baseDeDatos = {
    johnnyCash: {
        duracion: '90',
        fechaPublicacion: 'jun 2017',
        formato: 'vinilo',
        disquera: 'Warner'
    },
    blackStar: {
        duracion: '120',
        fechaPublicacion: 'ene 2016',
        formato: 'cd y vinilo',
        disquera: 'Warner y Sony'
    },
    chanchoEnPiedra: {
        duracion: '65',
        fechaPublicacion: 'sept 2000',
        formato: 'cd',
        disquera: 'Sony'
    }
}


export const buscarDisco = (idDisco) => {

    const disco = baseDeDatos[idDisco];
    return new Promise((resolve, reject) => {
         
        if (disco) {
            resolve(disco);
        } else {
            reject(
                `El disco con id ${idDisco} no existe`
                /* {
                duracion: 'no existe',
                fechaPublicacion: 'no existe',
                formato: 'no existe',
                disquera: 'no existe',
                dondePaso: 'promesas.js buscarDisco'
            } */);
        }    
    });   
}




let parrafo = document.getElementById('parrafo');    // donde insertar resultado
const funcionAsincrona = async function(parrafo, id) {
    try {                                                           
      const api = await buscarDisco(id).then(function(res) {  // respuesta es el contenido de promesa
        parrafo.innerHTML(res);                               // haciendo que la respuesta se pinte en el parrafo
      });
      return api
    } catch (error) {
      console.log('error');
    }
  }


funcionAsincrona(parrafo, 'blackStar');


