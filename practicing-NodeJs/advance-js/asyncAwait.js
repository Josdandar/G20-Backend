/**
 * Cambia la forma de ejecutar las promesas
 * ASYNC AWAIT
 *
 * ASYNC -> CUANDO HAREMOS UNA FUNCION ASINCRONA
 * AWAIT -> ESPERA UNA PROMESA
 *
 * REGLAS
 *
 * ASYNC VA EN LA DECLARACION DE LA FUNCION
 * EL AWAIT VA DENTRO DE LA FUNCION QUE SE DECLARO COMO ASINCRONA
 *
 *
 * SINTAXIS
 *
 * Arrow function -> Antes de los parentesis se escribe async
 *
 * Al ver que funcion tiene async si o si esta retornando una promesa
 *
 * En funcion normal va antes de la palabra reservada async function
 *
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

const procesoKodemia = async () => {
    const koderInformar = await darInformes({...koder})
    const koderEntrevistando = await entrevistar({...koderInformar})
    const koderPagar = await pagar({...koderEntrevistando})
    const koderInscrito = await inscribir({...koderPagar})
    console.log(koderInscrito)
}

procesoKodemia()