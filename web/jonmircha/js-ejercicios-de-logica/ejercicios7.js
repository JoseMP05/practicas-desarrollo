// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

// NUMERO 21
const elevarArray = arreglo => {
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

    resultado = arreglo.map(numero => numero ** 2);
    return console.log(`El resultado de ${arreglo} elevado al cuadrado es ${resultado}`)
}
elevarArray([1,2,3,4,5,6,7,8,9,10]);


//NUMERO 22
const mayorMenor = arreglo => {
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

    let mayor = arreglo[0];
    let menor = arreglo[0];
    arreglo.forEach(numero => {
        if(numero >= mayor) mayor = numero;
        if(numero <= menor) menor = numero; 
    })
    return console.log(`El numero mayor es: ${mayor} y el número menor es: ${menor}`);
}
mayorMenor([1, 4, 5, 99, -60]);


//NUMERO 23
const parImpares = arreglo => {
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
    const objeto = {
        par: [],
        impar: [],
    }

    arreglo.forEach(numero => {
        (numero % 2 === 0)? objeto.par.push(numero):objeto.impar.push(numero);
    })
    return console.log(objeto);
}
parImpares([1,2,3,4,5,6,7,8,9,0]);

