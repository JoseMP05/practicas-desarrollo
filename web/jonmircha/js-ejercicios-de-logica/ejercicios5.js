// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
/* const binarioADecimal = (numero, base) => {
    if(base === "B"){
        numeroLongitud = numero.toString();
        numeroLongitud = numeroLongitud.split("").reverse();
        const sumandos = [];
        for (let i = 0; i < numeroLongitud.length; i++) {
            const potencia = 2 ** i;
            const binario = 1 * potencia;
            if (numeroLongitud[i] == 1) sumandos.push(binario);
        }
        resultado = 0;
        sumandos.forEach(item => resultado += item)
        console.log(resultado);
    }
    if(base === "D"){
        let resultadoa = undefined;
        const final = []
        let finalfinal = [];
        while(numero > 0){
            numero = Math.floor(numero / 2);
            resultadoa = Math.round(numero % 2);
            final.push(resultadoa)
            console.log(final);        
        }
    }
}
binarioADecimal(25,"D");
 */
const aplicarDescuento = (valor, descuento) => {
    if(valor === undefined || descuento === undefined) return console.error("no se ha ingresado uno de los parametro");
    if(valor === "" || valor === " ") return console.error("se ha pasado el parámetro 'valor' vacio o en blanco")
    if(descuento === "" || descuento === " ") return console.error("se ha pasado el parámetro 'descuento' vacio o en blanco")
    if(isNaN(valor) || isNaN(descuento)) return console.error("Uno de los parametros no es un numero")
    if(descuento < 0) return console.error("no se puede descontar un valor negativo")
    valor = parseInt(valor);
    descuento = parseInt(descuento);

    descuentoTotal = valor * `0.${descuento}`;
    valor = valor - descuentoTotal;
    return valor
}
console.log(aplicarDescuento(1000, 20));