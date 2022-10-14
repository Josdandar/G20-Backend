/*
 *Promesa -> El resultado de un proceso asincrono
 *Tienen tres estados
 *Pending - En espera
 *Rejected - Si ocurrio un error - fue rechazada - es una funcion - de parametro le pasamos el error
 *Resolve - Se resolvio - fue aceptada  - es una funcion
 *
 *Son de JavaScript, en otros lenguajes no hay promesas, hay similares
 *Se resuelven o se rechazan
 *
 *Al ejecutar las promesas
 *Recibimos el rechazo o la respuesta resuelta con
 * .then -> Recibir lo resuelto
 * .catch -> Recibir el error
 */

const koder = {
  seDieronInformes: false,
  seEntrevisto: false,
  sePago: false,
  seInscribio: false,
};

const darInformes = (koderAInformar) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      koderAInformar.seDieronInformes = true;

      if (!koderAInformar.seDieronInformes) {
        reject("No se le dieron informes");
      }

      resolve(koderAInformar);
    }, 2000);
  });
};

const entrevistar = (koderAEntrevistar) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      koderAEntrevistar.seEntrevisto = true;

      if (!koderAEntrevistar.seEntrevisto) {
        reject("No se ha entrevistado");
      }

      resolve(koderAEntrevistar);
    }, 2000);
  });
};

const pagar = (koderApagar) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      koderApagar.sePago = true;

      if (!koderApagar.sePago) {
        reject("No se ha pagao");
      }

      resolve(koderApagar);
    }, 2000);
  });
};

const inscribir = (koderInscrito) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      koderInscrito.seInscribio = true;

      if (!koderInscrito.seInscribio) {
        reject("No se ha inscrito");
      }

      resolve(koderInscrito);
    }, 3000);
  });
};

const koderInformado = darInformes({ ...koder });
koderInformado
  .then((koderInformado) => {
    console.log(koderInformado);

    entrevistar({ ...koderInformado })
      .then((koderEnrevistado) => {
        console.log(koderEnrevistado, "Koder Entrevistado");

        pagar({ ...koderEnrevistado })
          .then((koderAPagar) => {
            console.log("El koder ha pagao", koderAPagar);

            inscribir({ ...koderAPagar })
              .then((koderInscrito) => {
                console.log("Se ha inscrito exitosamente", koderInscrito);
              })
              .catch((error) => {
                console.log("Error", error);
              });
          })
          .catch((error) => {
            console.log(error, "Error");
          });
      })
      .catch((error) => {
        console.log(error, "error");
      });
  })
  .catch((error) => {
    console.log(error);
  }); //siempre validar errores
