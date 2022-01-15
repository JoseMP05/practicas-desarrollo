// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

//NUMERO 18
const contarVocalesYConsonantes = cadena => {
    if(cadena === undefined) return console.error("no se ha ingresado ninguna cadena");
    if(cadena === "" || cadena === " ") return console.error("se ha pasado un cadena vacia o en blanco");
    if(typeof cadena !== "string") return console.log(`No estas ingresando una cadena`);
    cadena = cadena.toLowerCase();

    const vocales = ["a","e","i","o","u","á","é","í","ó","ú"];
    const consonantes = ["q","w","r","t","y","p","s","d","f","g","h","j","k","l","ñ","z","x","c","v","b","n","m"];
    let vocalCount = 0;
    let consonanteCount = 0;
    for (let i = 0; i < cadena.length; i++) {
        vocales.forEach(item => {if(item === cadena[i]) vocalCount = vocalCount + 1})
        consonantes.forEach(item => {if(item === cadena[i]) consonanteCount = consonanteCount + 1})
    }
    return console.log(`Vocales: ${vocalCount}, consonantes: ${consonanteCount}`);
}
contarVocalesYConsonantes("hola como ESTAS amor");


//EJERCICIO PARA VALIDAR UN NOMBRE (cada palabra del nombre empiece por mayuscula)
const validarNombre = nombre => {
    if(nombre === undefined) return console.error("no se ha ingresado ninguna nombre");
    if(nombre === "" || nombre === " ") return console.error("se ha pasado un nombre vacia o en blanco");
    if(typeof cadena !== "string") return console.log(`No estas ingresando una cadena`);

    nombre = nombre.toLowerCase();
    nombre = nombre.split(" ");
    nombreResultado = nombre.map(item => item[0].toUpperCase() + item);
    nombreResultado = nombreResultado.map(item => item.replace(item[1], ""))
    nombreResultado = nombreResultado.join(" ");
    console.log(nombreResultado);

}
validarNombre("jose miguel")

//NUMERO 19
const comprobarNombre = nombre => {
    if(nombre === undefined) return console.error("no se ha ingresado ninguna nombre");
    if(nombre === "" || nombre === " ") return console.error("se ha pasado un nombre vacia o en blanco");
    if(typeof cadena !== "string") return console.log(`No estas ingresando una cadena`);
    
    let expresion = /\b([A-Z]{1}[a-z]{1,30}[- ]{0,1}|[A-Z]{1}[- \']{1}[A-Z]{0,1}[a-z]{1,30}[- ]{0,1}|[a-z]{1,2}[ -\']{1}[A-Z]{1}[a-z]{1,30}){2,5}/; // tomado de https://www.it-swarm-es.com/es/regex/expresion-regular-para-el-nombre-y-apellido/968019401/ - Steve Kinzey
    let validar = expresion.test(nombre);
    return console.log(`¿${nombre} es valido como un nombre?: ${validar}`);

}
comprobarNombre("Jose Miguel")

//NUMERO 20
const validarEmail = email => {
    if(email === undefined) return console.error("no se ha ingresado ningun email");
    if(email === "" || email === " ") return console.error("se ha pasado un email vacia o en blanco");
    if(typeof cadena !== "string") return console.log(`No estas ingresando una cadena`);

    let expresion = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
    let validar = expresion.test(email);
    (validar)? console.log(`el ${email} es un email valido`): console.log(`el ${email} no es un email valido`)
}
validarEmail("jjosemii64@gmail.com");