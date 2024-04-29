//Importación del módulo

const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');


//const base = 5;


console.clear();

crearArchivo( argv.b, argv.l, argv.n )
    .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
    .catch( err => console.log(err) )




//#region PROCESS.ARGV  

/*  

    //información general desde los procesos en consola
    console.log(process.argv)

    //información específica desde los procesos en consola
    const [ , , arg3] = process.argv;
    console.log(arg3);


    //información específica con split
    const [ , , arg3 = 'base=5' ] = process.argv;
    const [ , base = 5 ] = arg3.split('=');


    //Información en consola usando process.argv vs importando yargs argv
    console.log(process.argv)
    console.log(argv)
    console.log('base yargs = ', argv.base)

*/

//#endregion