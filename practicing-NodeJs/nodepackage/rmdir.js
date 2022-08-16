const fs = require("fs")

// Leer directorio con callback
// fs.readdir("directorio1", "utf-8", (err, files) => {
//   if(err) throw err
//   console.log("files", files)
// })

/**
 * Hacer una carpeta dentro de otra
 * Y eliminar el contenido de toda la carpeta de adentro
 * En pseudo-codigo
 * readdir -> leer directorio
 * rmdir -> eliminar directoio
 * unlink -> eliminar un archivo
 * fs.statSync(path[, options]) -> para ver los stats de un archivo o directorio 
 * (tip: para ver si algo es directorio)
 */

/**
 * Pseudocodigo del ejercicio1
 * 
 * 1 - Leer el directorio -> arreglo de archivos => [text1, text2, text3]
 * 2 - Ciclar mis archivos
 * 3 - En cada ciclo, voy a eliminarlo
 */

 const path = "dir1"
 fs.readdir(path, "utf-8", (err, files) => {
   if(err) throw err
 
   // Validar que cuanto no tenga archivos me imprima que no hay archivos.
   if(files.length === 0) {
     console.log("No hay archivos")
     return
   }
   // La callback es una funcion
   // A las funciones le podemos en los paramet=ros
 
   // Continuar con que si tenemos archivos
   files.forEach(file => {
     fs.unlink(`${path}/${file}`, (err) => {
       if(err) throw err
 
       console.log(`La eliminacion del ${file} fue exitosa`)
     })
   })
 
 })