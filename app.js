//Importación del módulo
const { crearArchivo } = require('./helpers/multiplicar')

const base = 5;



console.clear();



crearArchivo(base)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
    .catch( err => console.log(err) )
