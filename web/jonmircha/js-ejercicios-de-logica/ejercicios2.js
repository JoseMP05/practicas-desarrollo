//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
//6 Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
//7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

//NUMERO 5

const invertirCadena = (cadena = undefined) => {
    if(cadena === undefined)console.error("no se ha introducido ningún texto");
    if(cadena === "" || cadena === " ")console.error("Se introdujo un texto vacio o un texto en blanco");
    let cadenaArreglo = cadena.split("");
    cadenaArreglo.reverse();//reverse ordena los items de un arreglo en sentido contrario
    cadenaArreglo.join("");//El método join() une todos los elementos de una matriz en una cadena y devuelve esta cadena.
    return console.log(cadenaArreglo);
}
invertirCadena("hola que tal");


//NUMERO 6

const contarPalabra = (cadena = "", palabra = undefined) => {
    if(cadena === undefined || palabra === undefined) return console.error("falta uno o ambos parámetros");
    if(cadena === "" || cadena === " ") return console.error("Se introdujo un texto vacio o un texto en blanco");
    if(palabra === "" || palabra === " ")return console.error("Se introdujo una palabra vacia o en blanco");
    expresion = new RegExp(palabra,"g");
    ocurrencias = cadena.match(expresion); //El método match() se usa para obtener todas las ocurrencias de una expresión regular dentro de una cadena.
    resultado = ocurrencias.length;
    return console.log(`el texto "${palabra}" está ${resultado} veces en la cadena`);
}
contarPalabra("hola mundo, adios mundo", "mundo");


//NUMERO 7
const comprobarPalindromo = palabra => {
    if(palabra === undefined) return console.error("Falta la palabra como parámetro");
    if(palabra === "" || palabra === " ") return console.error("se ha pasado un texto vacio o en blanco")
    let palabraReversa = palabra.toLowerCase().split("");
    palabraReversa = palabraReversa.reverse();
    const palabraArreglo = palabra.toLowerCase().split("");
    let isPalindromo = undefined;
    for (let i = 0; i < palabraArreglo.length; i++) {
        (palabraArreglo[i] === palabraReversa[i]) ? isPalindromo = true : isPalindromo = false;
    }
    return console.log(`¿"${palabra}" es un palíndromo?: ${isPalindromo}`)
    
}
comprobarPalindromo("salas");

//NUMERO 8
const eliminarCaracteres = (cadena = "", caracteres= "") => {
    if(cadena === undefined || caracteres === undefined) return console.error("falta uno o ambos parámetros");
    if(cadena === "" || cadena === " ") return console.warn("Se introdujo un texto vacio o un texto en blanco");
    cadena = cadena.replace(new RegExp(caracteres,"ig"), "");//replace remplaza los caracteres pasados como primer parametro, por los valores pasados como segundo parametro
    return console.log(cadena);
}
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");