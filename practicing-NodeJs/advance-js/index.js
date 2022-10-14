//HTTP 
const http = require("http")

//Se crea un servidor http
//Ponemos a ese servidor a escuchar 
//Para escuchar requiere de un puerto 

const server = http.createServer((request, response) => {
    //Leer el request
    // console.log("method", request.method)
    // console.log("url", request.url)
    //destructurar 

    const { url , method } = request
    console.log("method", method)
    console.log("url", url)

    const endpoints = {
        "GET": {
            "/": "Bienvenido estas en el GET de home",
            "/profile": "Bienvenido estas en el GET de profile"
        },
        "POST":{
            "/": "Bienvenido estas en el POST de home",
            "/profile": "Bienvenido estas en el POST de profile"
        },
        "PUT":{
            "/": "Bienvenido estas en el PUT de home",
            "/profile": "Bienvenido estas en el PUT de profile"
        },
        "PATCH":{
            "/": "Bienvenido estas en el PATCH de home",
            "/profile": "Bienvenido estas en el PATCH de profile"
        },
        "DELETE": {
            "/": "Bienvenido estas en el DELETE de home",
            "/profile": "Bienvenido estas en el DELETE de profile"
        }
    }
    response.write(endpoints[method][url])
    response.end()

    // if(method === "GET" && url ==="/"){
    //     response.write("Bienvenido estas en el GET, estas leyendo")
    //     response.end()//Tengo que decirle que se finalizo
    // }else if(method === "POST" && url === "/"){
    //     response.write("Bienvenido estas en el POST, estas creando")
    //     response.end()
    // }else if(method === "PATCH" && url === "/"){
    //     response.write("Bienvenido estas en el PATCH, estas actualizando")
    //     response.end()
    // }else if(method === "DELETE" && url === "/"){
    //     response.write("Bienvenido estas en el delete, estas borrando")
    //     response.end()
    // }else if(method === "GET" && url === "/profile"){
    //     response.write("Bienvenido estas en el GET, estas en profile")
    //     response.end()
    // }
    // else{
    //     response.write("Esta ruta no existe aun :/")
    //     response.end()
    // }
})

//Dos parametros 
//Puerto
//Callback de lo que se hara cuando empiece a escuchar 
server.listen(8080, ()=>{
    console.log("Server listening...")
})
//Si modifico mi archivo tengo que apagar y prender de nuevo el servidor para que aparezca en insomnia
//nodemon nos evita esto
