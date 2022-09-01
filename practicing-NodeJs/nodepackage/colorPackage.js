let colors = require('colors'); /*En documentacion estaba como var pero se cambio a let */


const colorProcess = (processName) =>{
    console.log(colors.rainbow(`${processName}`));
}

colorProcess("Hi Everyone")