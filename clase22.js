function Persona(nombre, apellido, altura) {
    this.nombre = nombre // es un atributo del objeto que se esta creando
    this.apellido = apellido
    this.altura = altura
}

// Persona.prototype.saludar = function () {
//     console.log(`Hola, Me llamo ${this.nombre} ${this.apellido}`)
// }

Persona.prototype.saludar = () => {
    console.log(`Hola, Me llamo ${this.nombre} ${this.apellido}`)
}

// Persona.prototype.soyAlto = function () {
//     return this.altura > 1.8
// }

Persona.prototype.soyAlto = () => this.altura > 1.8

var sacha = new Persona("Sacha", "Lifszyc", 1.72)
var erika = new Persona("Erika", "Luna", 1.65)
var arturo = new Persona("Arturo", "Martinez", 1.89)

sacha.soyAlto()
erika.soyAlto()
arturo.soyAlto()

// Veremos los prototipos dentro de js que diferencia tienen con otros lenguajes de herencia.
// El prototipo es un objeto mas de js

// Es importante donde colocamos las funciones que va a tener el prototipo hay que poner juntas las funciones, conclusión colocar todas los prototipos(clases), y funciones del prototipo juntos al iniciar el código para que todas esas funciones estén disponibles hacia todos los objetos que estamos creando

