//HTTP 
//Forma moderna de hacer endpoints 

const express = require("express")
const app = express()

app.get("/", (request, response)=>{
    response.write("Bienvenido al GET de home")
    console.log("Bienvenido al GET de home")
    response.end()
})
app.listen("8080", ()=>{
    console.log("Servidor escuchando")
})

app.put("/", (request, response)=> {
    response.write("Bienvenido al put de home")
    console.log("Bienvenido al PUT de home")
    response.end()
})

app.patch("/", (request, response)=> {
    response.write("Bienvenido al Patch de home")
    console.log("Bienvenido al patch de home")
    response.end()
})

app.post("/", (request, response)=> {
    response.write("Bienvenido al post de home")
    console.log("Bienvenido al post de home")
    response.end()
})

app.delete("/", (request, response)=> {
    response.write("Bienvenido al delete de home")
    console.log("Bienvenido al delete de home")
    response.end()
})