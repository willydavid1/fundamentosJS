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
console.log(personasAltas)




// reto
const esBaja = (persona) => {
    return persona.altura < 1.75 
}
var personasBajas = personas.filter(esBaja) // si la persona es menor a 1.75 guardalo en la varieble
console.log(personasBajas)
