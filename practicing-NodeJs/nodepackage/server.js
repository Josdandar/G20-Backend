//HTTP 

const http = require("http")

console.log(http)

//Primero se crea servidor y despues se pone a escuchar 
//Si no pongo el .end se vuelve un ciclado\
//Un servidor para poner a escuchar requiere de un puerto
//Estudiar para que se usa cada puerto 

const server = http.createServer((request,response)=>{
    response.write("Hi, welcome to the server")
    response.end
})

//Pide puerto y callback de lo que se hara cuando se escuche 
server.listen(8080,()=>{
    console.log("Server listening...")
})