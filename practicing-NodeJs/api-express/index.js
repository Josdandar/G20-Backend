const express = require("express")
//Al importar o requerir algo siempre se colocara hacia arriba 
const app = express()
const fs = require("fs")
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

app.listen(8080, ()=>{
    console.log("Server is listening...")
})