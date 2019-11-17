// definimos un prototipo o constructor, en los parametros va a requerir o inicializar una persona
function Persona(nombre, apellido, altura) {
    this.nombre = nombre // es un atributo del objeto que se esta creando
    this.apellido = apellido
    this.altura = altura
}

// le estamos diciendo que dentro del prototipo de persona, va a existir un atributo saludar, que sera una funcion
// No tenemos que usar arrow function para usar referencias, a un objeto con this. A los atributos que son funciones de un prototipo no las hay que hacer como arrow functions.
Persona.prototype.saludar = function() {
    console.log(`Hola, Me llamo ${this.nombre} ${this.apellido}`)
}

// le estamos diciendo que dentro del prototipo de persona, va a existir un atributo soyAlto, que sera una funcion y retornara true o false
// No tenemos que usar arrow function para usar referencias, a un objeto con this. A los atributos que son funciones de un prototipo no las hay que hacer como arrow functions.
Persona.prototype.soyAlto = function() {
    return this.altura > 1.8
}

// ENTOCES POR QUE THIS ES WINDOWS Y NO ES LA PERSONA NO ES QUIEN ESPERAMOS
// PORQUE THIS EN EL ESPACIO GLOBAL ES WINDOW, y las arrow function hacen referencia a this de Windows no del objeto


var sacha = new Persona("Sacha", "Lifszyc", 1.72)
var erika = new Persona("Erika", "Luna", 1.65)
var arturo = new Persona("Arturo", "Martinez", 1.89)


// Veremos los prototipos dentro de js que diferencia tienen con otros lenguajes de herencia.
// El prototipo es un objeto mas de js

// Es importante donde colocamos las funciones que va a tener el prototipo hay que poner juntas las funciones, conclusión colocar todas los prototipos(clases), y funciones del prototipo juntos al iniciar el código para que todas esas funciones estén disponibles hacia todos los objetos que estamos creando

