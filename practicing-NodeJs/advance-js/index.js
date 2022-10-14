//HTTP 
const http = require("http")

//Se crea un servidor http
//Ponemos a ese servidor a escuchar 
//Para escuchar requiere de un puerto 

const server = http.createServer((request, response) => {
    //Leer el request
    console.log(request)

    response.write("Holi desde el servidor")
    response.end()//Tengo que decirle que se finalizo
})

//Dos parametros 
//Puerto
//Callback de lo que se hara cuando empiece a escuchar 
server.listen(8080, ()=>{
    console.log("Server listening...")
})
//Si modifico mi archivo tengo que apagar y prender de nuevo el servidor para que aparezca en insomnia
//nodemon nos evita esto
