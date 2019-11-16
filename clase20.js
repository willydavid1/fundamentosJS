var sacha = {
    nombre: "Sacha",
    apellido: "Lifszyc",
    altura: 1.72,
    cantidadDeLibros: 111
}

var alan = {
    nombre: "Alan",
    apellido: "Gomez",
    altura: 1.86,
    cantidadDeLibros: 78
}

var martin = {
    nombre: "Martin",
    apellido: "Gomez",
    altura: 1.85,
    cantidadDeLibros: 132
}

var dario = {
    nombre: "Dario",
    apellido: "Juarez",
    altura: 1.71,
    cantidadDeLibros: 90
}

var vicky = {
    nombre: "Vicky",
    apellido: "Zapata",
    altura: 1.56,
    cantidadDeLibros: 91
}

var paula = {
    nombre: "Paula",
    apellido: "Barros",
    altura: 1.76,
    cantidadDeLibros: 182
}

// Vamos a guardar a todas esas personas dentro de una misma coleccion
var personas = [sacha, alan, martin, dario, vicky, paula]


const esAlta = (persona) => persona.altura > 1.8
var personasAltas = personas.filter(esAlta)
// console.log(personasAltas)



const pasarAlturaAcms = (persona) => ({
    //persona.altura = persona.altura * 100 //esto modifica al array original
    ...persona,
    altura: persona.altura * 100
})
var personasCms = personas.map(pasarAlturaAcms)
// console.log(personasCms)

// Sacaremos la cuenta total de cuantos libros hay |se puede hacer con un for
// var acum = 0 // contara cuantos libros tenemos

// for (var i = 0; i < personas.length; i++) { //mientras i sea menor que la cantidad que haya en el array ejecuta esto
//     acum = acum + personas[i].cantidadDeLibros //suma la cantidad de libros que tiene el objeto con la del acumulador
// } // la variable i se incrementara a cada vuelta de bucle, lo cual ese sera el indice del array

// console.log(`En total todos tienen ${acum} libros`)


const reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros
var totalDelibros = personas.reduce(reducer, 0) 
console.log(`En total todos tienen ${totalDelibros} libros`)

// EL REDUCE FUNCIONA ASI: (reduce el array a un total)
//     array.reduce(funcion, contador) manda el acumulador y el objeto
//     En la funcion recibimos por parametro el acumulador y el objeto en este caso a cada persona
//     le sumamos al acumulador, la cantidad de libros que tenga el objeto persona






// DIFERENCIA ENTRE MAP() Y FILTER()
//      La funcion map(), devuelve un nuevo array donde va modificar cada uno de los elementos que le pasemos del array original, para evitar eso retornamos un nuevo objeto
//      La filter lo que hace es filtrar y retorna un array con esos elementos filtrados

// Y FUNCIONA ASI el filter var arrayFiltrado = array.filter(funcion) 
//      El filter itera a cada objeto del array y lo manda a la funcion 
//      En la función recibimos al objeto y evaluamos la condición esta retorna la condición boleana
//      Y luego todas las personas filtradas se almacenaran en la variable, el FILTER DEVUELVE UN NUEVO ARRAY

// Funciona asi El map() itera a cada objeto del array y lo manda a la función
//      Recibimos al objeto persona en la función
//      Desglosamos a la persona en la función creando un nuevo objeto y modificamos el atributo altura, retornando el objeto nuevo modificado y se guarda el array nuevo modificado en la varieble

// PARA ACCEDER A UN ELEMENTO DEL ARRAY | personas[indice] ejemplo persona[0] // retorna el objeto sacha
// PARA ACCEDER A UN ATRIBUTO DE UN OBJETO QUE ESTA DENTRO DEL ARRAY | personas[0].altura o personas[0]["altura"] // retorna el atributo altura de sacha
