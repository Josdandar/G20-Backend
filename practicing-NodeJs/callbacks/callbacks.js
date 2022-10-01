/*
- Pedir informes 
- Entrevista
- Pagos
- Inscripcion 
*/

const koder = {
    seDieronInformes: false,
    seEntrevisto: false,
    sePago: false,
    seInscribio: false,
}

/*Crear funcion donde todas nuestras propiedades pasen a true */

const darInformes = (koderADarInformes, callbackToHandle) => {
    let error = null 
    setTimeout(()=>{
        //Darle informes al Koder
        koderADarInformes.seDieronInformes = true

        //Si el koder no fue informado, lanzar un error 
        if(!koderADarInformes.seDieronInformes){
            error = "No ha sido informado"
        }
        callbackToHandle(error, koderADarInformes)
        
    },3000)
}

const entrevistar = ( koderAEntrevistar ) => {
    koderAEntrevistar.seEntrevisto = true
    return koderAEntrevistar
}

const pagar = ( koderAPagar ) => {
    koderAPagar.sePago = true
    return koderAPagar
}

const inscribir = ( koderAInscribir ) => {
    koderAInscribir.seInscribio = true
    return koderAInscribir
}

//Si paso koder como tal se mandara el valor por referencia, al usar el spread operator paso por valor sin afectar el valor de la variable 

const koderInformado = darInformes({...koder}) //1

const koderEntrevistado = entrevistar({...koderInformado})//2

const koderPago = pagar({...koderEntrevistado})//3

const koderInscrito = inscribir({...koderPago})//4
console.log("Koder inscrito", koderInscrito)

darInformes({...koder}, (error, koderADarInformes) => {

    if(error){
        console.log(error)
        return 
    }

    console.log(koderADarInformes)
})