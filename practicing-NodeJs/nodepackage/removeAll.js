const fs = require("fs")

/**
 * Ejercicio
 * Hacer una carpeta dentro de otra
 * Y eliminar el contenido de toda la carpeta de adentro
 * INICIO
 * 1 - Leer el contenido de la carpeta
 * 2 - Ciclar el contenido que recibimos
 * CICLO:
 *     1 - Checar si es una carpeta o no
 *     SI Es carpeta:
 *        Volver a leer el contenido la carpeta
 *        CICLO:
    *        Si esta vacio:
    *           Imprimir que esta vacio       
    *        Si no:
    *           Checar si es una carpeta o no
    * 
 *     SI NO:
 *        Eliminar archivo
 * 
 * FIN
 */

const path = "dir1"
let counter = 0
const removeAll = (path) => {
  //dir1/dir3/dir5
  const content = fs.readdirSync(path, "utf-8")

  content.forEach((file) => {
    const newPath = `${path}/${file}` 
    
    counter += 1 // Para ver cuando es carpeta
    // Checar si algunos de estos files es carpeta o no
    const isDirectory = fs.statSync(`${path}/${file}`).isDirectory()

    // Si es Carpeta
    if(isDirectory) {
      removeAll(newPath)
      fs.rmdirSync(newPath)
      return

    }
    // Si NO -> Que es archivo
    counter -= 1
    fs.unlinkSync(newPath)

  })
  counter -= 1
  console.log("counter aqui", counter)
  if(counter === -1) {
    fs.rmdirSync(path)
  }
}

removeAll(path)