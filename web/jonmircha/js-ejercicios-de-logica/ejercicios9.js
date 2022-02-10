/* 27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  --- Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  --- Valida que el título no rebase los 100 caracteres.
  --- Valida que el director no rebase los 50 caracteres.
  --- Valida que el año de estreno sea un número entero de 4 dígitos.
  --- Valida que el país o paises sea introducidos en forma de arreglo.
  --- Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película. */
/*     * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
 */

class Pelicula {
    constructor({id, titulo, director, estreno, pais, genero, calificacion}){
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.estreno = estreno;
        this.pais = pais;
        this.genero = genero;
        this.calificacion = calificacion;

        this.validarIMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarAñoEstreno(estreno);
        this.validarPais(pais);
        this.validarGenero(genero);
        this.validarGeneroPermitido(genero);
    }

    static get generosLista(){
      return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary","Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller","War", "Western"]
    }

    validarCadena(propiedad, valor){
      if(!valor) return console.warn(`${propiedad} "${valor}" está vacío`);
      if(valor === "") return console.warn(`${propiedad} "${valor}" está vacío`);
      if(typeof valor !== "string") return console.error(`${propiedad} "${valor}" NO es una cadena de texto`);

      return true;
    }

    validaLongitudCadena(propiedad, valor, longitud) {
      if(valor.length > longitud) return console.error(`${propiedad} "${valor}" excede el número de carácteres permitidos: "${longitud}"`);

      return true;
    }

    validarIMDB(id){
      if(this.validarCadena("IMDB id", id))
        if(!(/^([a-z]){2}([0-9]){8}$/.test(id))) return console.error(`IMDB id "${id} no es válida, debe tener 10 caracteres, los 2 primeros letras minúsculas y los demás números `);
    }

    validarTitulo(titulo){
      if(this.validarCadena("titulo",titulo)) this.validaLongitudCadena("titulo", titulo, 100);
    }

    validarDirector(director){
      if(this.validarCadena("director", director)) this.validaLongitudCadena("director", director, 50);
    }

    validarAñoEstreno(año){
      if(!año) return console.warn (`Año "${valor}" está vacío`);
      if(typeof año !== "number") return console.error(`${año} no es una cadena númerica`);
      if(Math.sign(año) === -1) return console.error(`${año} no puede ser negativo`);
      if(año !== Math.round(año)) return console.warn(`${año} debe ser un numero entero. Sin decimales.`);
      if(año.toString().length < 4 || año.toString().length > 4) return console.error(`${año} debe ser un número de 4 digitos`);

      return true;
    }

    validarArreglo (arreglo){
      if(!arreglo) return console.error("no se ha ingresado el parametro");
      if(!Array.isArray(arreglo)) return console.warn(`No estas ingresando un arreglo`);
      if(arreglo.length === 0) return console.warn("Ingresaste un arreglo vacío");

      return true
    }

    ValidarTextoDeArreglo (arreglo){
      if(this.validarArreglo(arreglo)){
        for (let i = 0; i < arreglo.length; i++) {
          if(typeof arreglo[i] !== "string") return console.warn(`Los elementos del arreglo [${arreglo}] deben ser cadenas de texto`)
          if(arreglo[i] === "") return console.warn(`${arreglo[i]} está vacío`);
        }
      }
      return true
    }

    validarPais (pais){
      if(this.validarArreglo(pais))this.ValidarTextoDeArreglo(pais);
      return true
    }

    validarGenero(genero){
      if(this.validarArreglo(genero))this.ValidarTextoDeArreglo(genero);
      return true
    }

    static generosAceptados(){
      return console.log(`Los generos aceptados son: ${Pelicula.generosLista.join(",")}`)
    }

    validarGeneroPermitido (generos){
      if(this.validarGenero){
        for (const iterator of generos) {
          if(!Pelicula.generosLista.includes(generos))console.error(`Genero(s) incorrectos ${generos}`);

        }
      }
    }
}


const peli = new Pelicula({
    id: "tt12345678",
    titulo: "Spider-man",
    director: "Tom Holland",
    estreno: 2000,
    pais: ["Colombia", "Japón", "Estados Unidos"],
    genero: ["Comedy"]
  });
  Pelicula.generosAceptados();