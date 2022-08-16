const fs = require("fs")
/*Fs es un objeto y tiene propiedades*/ 

console.log("fs write", fs.writeFile)

/*CRUD CON FILESYSTEM Y NODE*/

/*Crear un archivo con api de filesystem node*/ 
fs.writeFile("text1.txt", "Archivo creado desde node", "utf8", (err) => {
  // Logica negativa
  if(err) {
    console.log("err", err)
    return //Salte
  }

  // Si no, todo lo demas
  console.log("El archivo fue creado exito")
})

/*Leer un archivo con la api de filesystem, se usa uft8 para que lo regrese en lenguaje humano*/ 
fs.readFile("text1.txt","utf8", (err, data) =>{
  if (err) throw err
  console.log(err)
  console.log(data)
})

/*Modificar un archivo con filesystem */
/*Tambien se puede agregar codigo lol en un archivo*/ 
fs.appendFile("text1.txt", "Esto se agrego desde filesystem.js", "utf8", (err) => {
  if(err) {
    console.log("err", err)
    return
  }

  console.log("Tu archivo fue actualizado con exito")
})


/*Delete desde filesystem */ 
/*Borra el archivo que se creo arriba*/ 
fs.unlink("text1.txt",(err)=>{
  if(err) throw err
  console.log("Archivo eliminado permanentemente")
})

/**
 * Asincronidad -> Cuando varias se estan haciendo al mismo tiempo, y la que sale primero esa va
 *
 * Sincronidad -> Que se esta haciendo una cosa despues de la otra
 */

