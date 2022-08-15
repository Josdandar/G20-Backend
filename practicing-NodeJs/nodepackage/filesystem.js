const fs = require("fs")

console.log("fs write", fs.writeFile)

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
fs.readFile("readme.txt","utf8", (err, data) =>{
  if (err) throw err
  console.log(err)
  console.log(data)
})

