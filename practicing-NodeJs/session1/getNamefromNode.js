/* No access to DOM, BROWSER */
// console.log("Hi World")
// // console.log(process) <- Objeto del proceso con sus propiedades 

// console.log(process.argv) 
// /* node index.js jose <- se agrega en mi array argv */
// /*No se guarda */
//algo despues del return no se realiza 
// console.log("Nombre",process.argv[2]) 


let getName = process.argv[2]

const printName = (nombre) =>{
    if(nombre){ //No sea nulo o undefined
        console.log(`Welcome ${nombre}`)
        return 
    }
    console.log("No entro a mi condicion entonces hara todo lo de adelante")
    console.log(`Afuera de aqui ${nombre}`)
}

printName(getName)