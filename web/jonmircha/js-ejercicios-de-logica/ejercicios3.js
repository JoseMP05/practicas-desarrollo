//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
//10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
//11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

//NUMERO 9
const numeroAleatorio = () => Math.round(Math.random()*(601-501) + 500);
console.log(numeroAleatorio());

//NUMERO 10
const comprobarCapacua = numero => {
    if(numero === undefined) return console.error("no se ha ingresado el parametro");
    if(numero === "" || numero === " ") return console.error("se ha pasado un parametro vacio o en blanco")
    if(isNaN(numero)) return console.error("el parametro pasado no es un número")//la funcion isNaN comprueba si el parametro pasado es un número o no
    numeroReverse = numero.split("").reverse().join("");
    let isCapacua = false;
    if(numeroReverse == numero) isCapacua = true;
    return console.log(`¿"${numero}" es un capacúa?: ${isCapacua}`)
    
}
comprobarCapacua("2002");

//NUMERO 11
const calcularFactorial = numero => {
    numerofactorial = parseInt(numero);
    for(let i = 1; i < numero; i++) {
    numerofactorial *= i;
    }
    return console.log(numerofactorial);
}
calcularFactorial("5");