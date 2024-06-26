// librería filesystem node
const fs = require('fs');
const colors = require('colors');

//                                 Valores por defecto
const crearArchivo = async( base = 1, listar = false, numlim = 10 ) => {

  
    //EN USO
    //#region Ejemplo promesa 2 (con async en la parte del objeto)
    try{

        
        let salida = '';
        let consola = '';

        for ( let i = 1; i <= numlim; i++ ){
            salida += `${ base } x ${ i } = ${ base * i }\n`;
            consola += `${ base } ${ 'x'.magenta } ${ i } ${ '='.green } ${ base * i }\n`
        }
        
        //Cualquier valor sin inicializar en un if es true, caso contrario se usa '!' = !variable
        if( listar ){
            console.log('========================'.america);
            console.log('      Tabla del:', colors.red( base ) );
            console.log('========================'.america);
            console.log(consola);
        }
        
        //ARCHIVO
        fs.writeFileSync( `./archivos/tabla-${ base }.txt`, salida );

        return `tabla-${ base }.txt`;


    }
    catch( err ){
        throw err;
    }
    
    //#endregion

    
    //#region Ejemplo promesa 1 (sin async ni await)
    
    /*
        return new Promise ( (resolve,reject) => {
            console.log('========================');
            console.log('      Tabla del:', base);
            console.log('========================');

            let salida = '';

        
            for ( let i = 1; i <= 10; i++ ){
                salida += `${ base } x ${ i } = ${ base * i }\n`;
            }
            
            console.log(salida);

            fs.writeFileSync( `tabla-${ base }.txt`, salida );
            resolve (`tabla-${ base }.txt`);


        })
    */

    //#endregion


    //#region Ejemplo original sin promesas

    /*

    console.log('========================');
    console.log('      Tabla del:', base);
    console.log('========================');

    let salida = '';

    
    for ( let i = 1; i <= 10; i++ ){
        salida += `${ base } x ${ i } = ${ base * i }\n`;
    }
    
    console.log(salida);

    */
    
    //#endregion
    

    //#region funcion de creación de archivos EJEMPLO 1

        // writeFile/writeFileSync ( 'directorio (opcional) + nombre del archivo + extensión ', contenido, error )

        /* EJEMPLO 1
        fs.writeFile(`tabla-${ base }.txt`, salida, (err) => {
            
            //si el if es corto no es necesario poner else ya que lo reconoce inmediatamente
            if (err) throw err;

            console.log(`tabla-${ base }.txt creada`)
        })
        */

    //#endregion


    //#region funcion de creación de archivos EJEMPLO 2 (actual, usados en las promesas)
    
    /*    
    
    fs.writeFileSync( `tabla-${ base }.txt`, salida );

    console.log( `tabla-${ base }.txt creada correctamente` )
    */

    //#endregion

} 

//#region Exportación de módulos
module.exports = {
     
    /*
    Si el nombre del módulo es el mismo que el objeto entonces se pondría solo el nombre del objeto
    y JS lo reconocería inmediatamente como módulo:objeto

    EJ: crearArchivo = crearArchivo:crearArchivo 
    */
    crearArchivo
}
//#endregion