/***
 * Pastel
 * 1 - Leer la receta
 * 2 - Conseguir los ingredientes
 * 3 - Preparacion de la masa
 * 4 - Hornear el pastel
 * 5 - Decorar el paster
 */

//Yo tengo el control de nombrar los parametros de cualquier funcion, de preferencia ser especifico.

 const pastel = {
    recetaLeida : false,
    ingredientesConseguidos: false,
    masaPreparada: false,
    pastelHorneado: false,
    pastelDecorado: false
}

const leerReceta = (alimento, callback) => {
    let error = null;
    setTimeout(()=>{
        alimento.recetaLeida = true;
        
        if(!alimento.recetaLeida){
            error = "No se ha informado";
        }
        callback(error, alimento);
    },3000)
}

const conseguirIngredientes = (conseguirIngredientes, callback)=> {
    let error = null;
    setTimeout(()=>{
        conseguirIngredientes.ingredientesConseguidos = true;

        if(!conseguirIngredientes.ingredientesConseguidos){
            error = "No se han conseguido los ingredientes"
        }
        callback(error, conseguirIngredientes)
    },1000);
};

const prepararMasa = (masaAPreparar, callback)=> {
    let error = null;
    setTimeout(()=>{
        masaAPreparar.masaPreparada = true;

        if(!masaAPreparar.masaPreparada){
            error = "La masa no se ha preparado"
        }
        callback(error, masaAPreparar)
    },2000);
};

const hornearPastel = (pastelAHornear, callback)=> {
    let error = null;
    setTimeout(()=>{
        pastelAHornear.pastelHorneado = true;

        if(!pastelAHornear.pastelHorneado){
            error = "No se ha horneado el cake"
        }
        callback(error, pastelAHornear)
    },1000);
};

const decorarPastel = (pastelADecorar, callback)=> {
    let error = null;
    setTimeout(()=>{
        pastelADecorar.pastelDecorado = true;

        if(!pastelADecorar.pastelDecorado){
            error = "No se ha decorado el cakeo"
        }
        callback(error, pastelADecorar)
    },1000);
};

leerReceta({...pastel}, (error, recetaYaLeida) => {
    if(error){
        console.log("error", error)
        return;
    }
    conseguirIngredientes({...recetaYaLeida}, (error, ingredientesObtenidos)=>{
        if(error){
            console.log("error", error)
            return;
        }
        prepararMasa({...ingredientesObtenidos}, (error, SePreparoMasa)=>{
            if(error){
                console.log("error", error)
                return;
            }
            hornearPastel({...SePreparoMasa}, (error, seHorneoPastel)=>{
                if(error){
                    console.log("error", error)
                    return;
                }
                decorarPastel({...seHorneoPastel},(error, seDecoroPastel)=>{
                    if(error){
                        console.log("error", error)
                        return;
                    }
                    console.log("Tu pastel ya esta listo!", seDecoroPastel)
                })
            })
        })
    })
})

//La ventaja de usar el spread operator es que hacemos inmutable la variable original 
//callback hell 