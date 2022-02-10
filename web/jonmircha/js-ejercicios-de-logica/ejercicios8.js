// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

//NUMERO 24
const ordenarNumero = arreglo => {
    if(arreglo === undefined) return console.error("no se ha ingresado el parametro");
    if(!Array.isArray(arreglo)) return console.log(`No estas ingresando un arreglo`);//Para usar este metodo debemos llamar al prototipo array 
    try{
        arreglo.forEach(item => {
            if(isNaN(item)) throw "El arreglo solo puede contener numeros";
            if(item == "" && item  != 0) throw "El arreglo no puede contener cadenas vacias";
            if(typeof item == "string") throw "Los numeros no pueden estar en formato cadena";
        });
    }catch(err){
        return console.error(err);
    }

    const ascendente = arreglo;
    const descendente = arreglo;

    const ordenacion = {
        ascendente: ascendente.sort(function (a,b){
            return a - b;
        }),
        descendente: descendente.sort(function (a,b){
            return b - a;
        }),
    }
    return console.log(ordenacion);
}
ordenarNumero([7,5,7,8,80,9]);


//NUMERO 25
const eliminarDuplicado = arreglo => {
    if(arreglo === undefined) return console.error("no se ha ingresado el parametro");
    if(!Array.isArray(arreglo)) return console.log(`No estas ingresando un arreglo`);

    const resultado = [];
    for (let i = 0; i < arreglo.length; i++) {
        if(!resultado.find(item => item === arreglo[i])) resultado.push(arreglo[i]);
    }
    return console.log(resultado);
}
eliminarDuplicado(["x", 10, "x", 2, "10", 10, true, true]);


// NUMERO 26
const getPromedio = arreglo => {
    if(arreglo === undefined) return console.error("no se ha ingresado el parametro");
    if(!Array.isArray(arreglo)) return console.log(`No estas ingresando un arreglo`);//Para usar este metodo debemos llamar al prototipo array 
    try{
        arreglo.forEach(item => {
            if(isNaN(item)) throw "El arreglo solo puede contener numeros";
            if(item == "" && item  != 0) throw "El arreglo no puede contener cadenas vacias";
            if(typeof item == "string") throw "Los numeros no pueden estar en formato cadena";
        });
    }catch(err){
        return console.error(err);
    }
    let resultado = 0;
    arreglo.forEach(numero => resultado += numero);
    resultado /= arreglo.length;

    return console.log(resultado);
}
getPromedio([9,8,7,6,5,4,3,2,1,0]);