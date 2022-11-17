const { json } = require("express")
const express = require("express")
//Al importar o requerir algo siempre se colocara hacia arriba 
//Recordar que json es un objeto
const app = express()
const fs = require("fs")//callback api 
const fsPromise = require("fs/promises") //promise api 

//Endpoint de bienvenida 
app.get("/", (request, response)=>{
    response.write("Welcome to our express API")
    response.end()
})

//Read file
/**
 * 1-> Callbacks
 * 2-> Promises -> Then/Catch
 * 3/> Async/Await
 */

//Callback
app.get("/files-callbacks", (request, response)=>{
    fs.readFile("text1.txt","utf8", (err, data)=>{
        if(err){
            response.write("Theres an error")
            response.end()
        }
        response.write(data)
        response.end()
    })
})
//then y catch
app.get("/files-promises", (request, response)=> {
    fsPromise.readFile("text1.txt", "utf8")
    .then((data)=>{
        response.write(data)
        response.end()
    })
    .catch((error)=>{
        response.write(error)
        response.end()
    })
})


//Async/Await como mi callback es una funcion puedo agregarle el async 
//como me regresara algo lo tengo que guardar 
app.get("/files-async-await", async (request, response)=> {
    try{
        const file = await fsPromise.readFile("text1.txt", "utf8")
        response.write(file)
        response.end()
    }catch(error){
        response.write(error)
        response.end()
    }
})


//Enpoint que me traiga los koders
//recurso -> koders
// Todo lo que envia el cliente esta en request 
//  Todo lo que trae de regreso esta en response

app.get("/koders", async (request, response)=>{
    const { query } = request //de aqui podemos sacar el modulo que el cliente nos esta mandando 
    console.log("module", query.modulo)
    const database = await fsPromise.readFile("koders.json", "utf8")
    const parsedDatabase = JSON.parse(database)
    const kodersFound = parsedDatabase.koders.filter(koder => koder.modulo === query.modulo)
    console.log("kodersEncontrados", kodersFound)
    // response.send(parsedDatabase.koders)
    response.json(parsedDatabase.koders)
})


//Recibir un koder especifico con el id 
//los path params los trae como strings
app.get("koders/:id", async (request, response)=>{
    //Path Param
    const { params } = request 

    //DB 
    const db = await fsPromise.readFile("koders.json", "utf8")
    const parsedDB = JSON.parse(db)
    console.log(parsedDB)

    const foundKoder = parsedDB.koders.filter((koder) => koder.id == params.id)
    console.log(foundKoder)
    response.json(foundKoder[0])
})

app.listen(8080, ()=>{
    console.log("Server is listening...")
})