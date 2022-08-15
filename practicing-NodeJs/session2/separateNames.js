const nombres = [
    "Rodolfo",
    "Araceli",
    "Brisa",
    "Eduardo",
    "Gio", // nopmbre corto
    "Jose", // nombre corto
    "Luis",
    "Marco",
    "Mariana", // nombre largo
    "Pete",
    "Sebastian",
    "Sofia"
  ]
  
  /**
   * Construir una funcion que separe los nombres largos de los cortos 
   * un nombre largo es aquel que supera los 4 caracteres de longitud.
   * Input: ["Rodolfo" ...]
   * Destructurando
   * Output: const [nombresCortos, nombresLargos] = funcion(nombres) // retornando esto
   */
  
  const separateNames = (names) => {
    const largerNames = []
    const shortedNames = []
  
    names.forEach((name) => {
      if(name.length <= 4) {
        shortedNames.push(name)
      } else {
        largerNames.push(name)
      }
    })
  
    return [shortedNames, largerNames]
  }

console.log(separateNames(nombres))