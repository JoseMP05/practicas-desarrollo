// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

// NUMERO 1
function contarCadena (string = "") {
    try{
        if(string === "") throw "La cadena esta vacia";
        else{
            string = string.toString();
            console.log(`La longitud de la cadena "${string}" es ${string.length}`);
        }
    } catch (err){
        console.log(err);
    }
}
contarCadena();


// NUMERO 2
const recortarCadena = (string = "", number) => {
    try{
        if(string === "") throw "La cadena esta vacia";
        else{
            string = string.toString();
            let cadenaRec = string.slice(0, number);
            return cadenaRec;
        }
    } catch (err){
        console.error(err);
    }
}
console.log(recortarCadena("", 2));


// NUMERO 3

function stringEnArray (cadena = undefined, caracter = undefined){
    let cadenaFinal = [];
    if(cadena === undefined || caracter === undefined)console.warn("Uno de los parametros no ha sido rellenado");
    else if (cadena === "" || cadena === " ")console.warn("tu cadena no contiene nada (esto puede incluir espacios en blanco");
    else cadenaFinal = cadena.split(caracter);
    return cadenaFinal
}
console.log(stringEnArray("hola soy yo", " "));


// NUMERO 4
const repertirTexto = (texto = undefined, repeticiones = undefined) => {
    if(texto === undefined || repeticiones === undefined) return console.warn("falta uno de los parámetros");
    if(texto === "" || texto === " ") return console.warn("la cadena esta vacia o solo es un espacio en blanco");
    if(repeticiones === 0) return console.warn("¿Para qué repetir 0 veces?");
    let textoFinal = "";
    for (let i = 0; i < repeticiones; i++) {
        textoFinal += " "+ texto;
    }
    return console.log(textoFinal);
}
repertirTexto(5);