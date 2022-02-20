//TIPOS DE EVENTOS DEL TECLADO
//keydown se dispara cuando una tecla es apretada
//keyup se dispara cuando soltamos una tecla después de apretarla
//keypress se dispará mientras dejemos apretada una tecla
export function shortcuts (event){
    console.log(event.type)//type retorn el tipo de evento disparado
    console.log(event.key)//key retorna la tecla que disparó el evento
    console.log(event.keyCode)//  keyCode retorna el codigo de la tecla que disparóe l evento
    if(event.key === "a" && event.altKey){
        alert("utilizaste el comando")
    }
}