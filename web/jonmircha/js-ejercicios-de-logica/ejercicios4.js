// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

// NUMERO 12
const comprobarPrimo = numero => {
    if(numero === undefined) return console.error("no se ha ingresado el parametro");
    if(numero === "" || numero === " ") return console.error("se ha pasado un parametro vacio o en blanco");
    if(isNaN(numero)) return console.error("el parametro pasado no es un número");
    if(numero == 0) return console.info("0 no puede ser divisible por ningún numero");
    if(numero < 0) return console.info("Los números primos solo existen en el conjunto de los naturales (positivos)");
    numero = parseInt(numero);
    
    primo = undefined;
    for (let i = 1; i <= numero; i++) {
        if(numero % i === 0){
            if(i !== 1 && i !== numero)return console.log(`¿${numero} es un primo?: ${primo = false}`)
        }
    }
    return console.log(`¿${numero} es un primo?: ${primo = true}`);
}
comprobarPrimo(8);

const parImpar = numero => {
    if(numero === undefined) return console.error("no se ha ingresado el parametro");
    if(numero === "" || numero === " ") return console.error("se ha pasado un parametro vacio o en blanco");
    if(isNaN(numero)) return console.error("el parametro pasado no es un número");
    numero = parseInt(numero);
    
    (numero % 2 === 0)? console.log(`${numero} es par`):console.log(`${numero} es impar`);
}
parImpar(-2);

const convertirGrados = (numero, grados = "C") => {
    if(numero === undefined) return console.error("no se ha ingresado el parametro");
    if(numero === "" || numero === " ") return console.error("se ha pasado el parámetro 'número' vacio o en blanco")
    if(numero === "" || numero === " ") return console.error("se ha pasado el parámetro 'grados' vacio o en blanco")
    if(isNaN(numero)) return console.error("el parametro pasado no es un número")
    grados = grados.toUpperCase()
    if(grados != "C" && grados != "F") return console.error("solo se puede convertir de Celsius a Fahrenheit y viceversa. Digita C o F")
    numero =parseInt(numero)

    if(grados === "C"){
        grados = (numero * 9/5) + 32
        return console.log(`${grados} °F`); 
    }
    if(grados === "F"){
        grados = (numero - 32) * 5/9
        return console.log(`${grados} °C`); 
    }
}
convertirGrados(32,"c");