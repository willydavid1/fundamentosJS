class Persona {
    constructor (nombre, apellido, altura) {
        this.nombre = nombre // es un atributo del objeto que se esta creando
        this.apellido = apellido
        this.altura = altura
    }

    // metodos
    saludar() {
        console.log(`Hola, Me llamo ${this.nombre} ${this.apellido}`)
    }
    soyAlto() {
        return this.altura >= 1.8
    }
}

// para que una clase herede de otra
class Desarrollador extends Persona {
    constructor (nombre, apellido, altura) {
        super(nombre, apellido, altura) // no podemos usar this hasta que no llamemos al contructor padre | super define los atributos de la clase padre, y los hereda el hijo (desarrollador) le pasa los atributos al padre para que los tenga el hijo
    }
    //pisamos el metodo de la clase padre por esto:
    saludar() {
        console.log(`Hola, Me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
    }
}



// var sacha = new Persona("Sacha", "Lifszyc", 1.72)
// var erika = new Persona("Erika", "Luna", 1.65)
// var arturo = new Persona("Arturo", "Martinez", 1.89)