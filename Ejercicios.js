
function ContrasenaValida (contrasenaValida){
    if (contrasenaValida === "2Fj(jjbFsuj" || contrasenaValida === "eoZiugBf&g9"){
      return true;
    }else {
     return false;
}
    
}
 // código de prueba
console.log(contrasenaValida("2Fj(jjbFsuj")) // true
console.log(contrasenaValida("eoZiugBf&g9")) // true
console.log(contrasenaValida("hola")) // false
console.log(contrasenaValuda("")) // false
//---------------------------------------------------------

function bmi(peso,altura){
    cost= peso/Math.pow(altura*2);
  
 if (bmi <= 18.5) {
        return "Bajo de peso";
    } else if (bmi <= 24.9) {
        return "Normal";
    } else if (bmi <= 30) {
        return "Sobrepeso";
    } else if (bmi > 30){
        return "Obeso";
    }
}
// código de prueba
console.log(bmi(65, 1.8)) // "Normal"
console.log(bmi(72, 1.6)) // "Sobrepeso"
console.log(bmi(52, 1.75)) //  "Bajo de peso"
console.log(bmi(135, 1.7)) // "Obeso"
//---------------------------------------------------------

const imprimirArreglo = (arr) => {
    arr.forEach(element => {
        console.log(element);
    });
}
console.log(imprimirArreglo(1, "Hola", 2, "Mundo"))
// codigo de prueba
// 1
// Hola
// 2
// Mundo
//---------------------------------------------------------
const contarRango = (Inicio, fin) => {
    let contador = 0;
    for (let i = Inicio + 1; i < fin; i++) {
        contador++;
    }
    return contador;
}
// código de prueba
console.log(contarRango(1, 9)) // 7
console.log(contarRango(1332, 8743)) // 7410
console.log(contarRango(5, 6)) // 0
//---------------------------------------------------------

const numeroDeAes = (cadena) => {
    let contador = 0;
    for (let i = 0; i <cadena.length; i++) {
        if (cadena[i] === 'a') {
            contador++;
        }
    }
    return contador;
}
// código de prueba
console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes("")) // 0
//---------------------------------------------------------

const numeroDeCaracteres = (cadena, caracter) => {
    let contador = 0;
    for (let i = 0; i <cadena.length; i++) {
        if (cadena[i] === caracter) {
            contador++;
        }
    }
    return contador;
}
// código de prueba
console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
console.log(numeroDeCaracteres("MMMMM", "m")) // 0
console.log(numeroDeCaracteres("eeee", e)) // 4
//---------------------------------------------------------

const sumarArreglo = (arreglo) => {
    return arreglo.reduce((suma, Elemento) => suma + Elemento, 0);
}
// código de prueba
console.log(sumarArreglo([3, 1, 2])) // 6
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
console.log(sumarArreglo([])) // 0
//---------------------------------------------------------

const multiplicarArreglo = (arreglo) => {
    return arreglo.reduce((producto, Elemento) => producto * Elemento, 1);
}

// código de prueba
console.log(multiplicarArreglo([4, 1, 2, 3])) // 24
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
console.log(multiplicarArreglo([])) // 1
//---------------------------------------------------------

const removerCeros = (arreglo) => {
    return arreglo.filter(Elemento => Elemento !== 0);
}
// código de prueba
console.log(removerCeros([0, 1, 0, 2, 0, 3])) // [1, 2, 3]
console.log(removerCeros([9, 3, 6, 4])) // [9, 3, 6, 4]
console.log(removerCeros([0, 0, 0])) // []
//---------------------------------------------------------

const duplicar = (arreglo) => {
    return arreglo.map(Numero => Numero * 2);

}
// código de prueba
console.log(duplicar([1, 2, 3])) // [2, 4, 6]
console.log(duplicar([])) // []