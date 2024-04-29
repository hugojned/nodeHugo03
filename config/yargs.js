const { options } = require('yargs');

//yargs con opciones en split automatico
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base de la tabla de multiplicar'
    })
    .option('n', {
        alias: 'numlimit',
        type: 'number',
        default: 10,
        describe: 'Número de impresiones límite de la tabla en la consola y el archivo de texto'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: false,
        describe: 'Opción de mostrar la tabla en la consola'
    })
    .check( (argv,options) => {
        if( isNaN( argv.b )){
            throw 'La base debe de ser un número entero'
        }
        return true;
    })
    .argv;

//Otra forma de exportar módulos
module.exports = argv;