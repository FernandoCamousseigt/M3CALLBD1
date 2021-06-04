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

export const buscarDisco = (idDisco, callback) => {
    const disco = baseDeDatos[idDisco];
    callback(disco);
}