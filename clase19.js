var sacha = {
    nombre: "Sacha",
    apellido: "Lifszyc",
    altura: 1.72
}

var alan = {
    nombre: "Alan",
    apellido: "Gomez",
    altura: 1.86
}

var martin = {
    nombre: "Martin",
    apellido: "Gomez",
    altura: 1.85
}

var dario = {
    nombre: "Dario",
    apellido: "Juarez",
    altura: 1.71
}

var vicky = {
    nombre: "Vicky",
    apellido: "Zapata",
    altura: 1.56
}

var paula = {
    nombre: "Paula",
    apellido: "Barros",
    altura: 1.76
}

// PARA ACCEDER A UN ELEMENTO DEL ARRAY | personas[indice] ejemplo persona[0] // retorna el objeto sacha
// PARA ACCEDER A UN ATRIBUTO DE UN OBJETO QUE ESTA DENTRO DEL ARRAY | personas[0].altura o personas[0]["altura"] // retorna el atributo altura de sacha

// Vamos a guardar a todas esas personas dentro de una misma coleccion
var personas = [sacha, alan, martin, dario, vicky, paula]


// Y FUNCIONA ASI var arrayFiltrado = array.filter(funcion) 
//      El filter itera a cada objeto del array y lo manda a la funcion 
//      En la función recibimos al objeto y evaluamos la condición esta retorna la condición boleana
//      Y luego todas las personas filtradas se almacenaran en la variable, el FILTER DEVUELVE UN NUEVO ARRAY

const esAlta = (persona) => persona.altura > 1.8
var personasAltas = personas.filter(esAlta)
// console.log(personasAltas)


// Funciona asi El map() itera a cada objeto del array y lo manda a la función
//      Recibimos al objeto persona en la función
//      Desglosamos a la persona en la función creando un nuevo objeto y modificamos el atributo altura, retornando el objeto nuevo modificado y se guarda el array nuevo modificado en la varieble

// Transformar la altura de las personas pasarlas a cm | formula = altura * 100
const pasarAlturaAcms = (persona) => ({
    //persona.altura = persona.altura * 100 //esto modifica al array original
    ...persona,
    altura: persona.altura * 100
})
var personasCms = personas.map(pasarAlturaAcms)
console.log(personasCms)


// DIFERENCIA ENTRE MAP() Y FILTER()
//      La funcion map(), devuelve un nuevo array donde va modificar cada uno de los elementos que le pasemos del array original, para evitar eso retornamos un nuevo objeto
//      La filter lo que hace es filtrar y retorna un array con esos elementos filtrados
