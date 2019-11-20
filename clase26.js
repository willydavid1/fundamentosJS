// podemos pasar funciones como parametros
class Persona {
    constructor (nombre, apellido, altura) {
        this.nombre = nombre // es un atributo del objeto que se esta creando
        this.apellido = apellido
        this.altura = altura
    }

    // metodos
    saludar(fn) {
        var { nombre, apellido } = this //se lee asi: del objeto this quiero los atributos nombre y apellido de ese objeto
        console.log(`Hola, Me llamo ${nombre} ${apellido}`)
        if (fn) { // si nos pasan una funcion (cuando llaman al metodo)
            fn(nombre, apellido) //llamamos a la funcion que nos mandan por parametro
        }
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
    saludar(fn) {
        // var nombre = this.nombre // almacena en nombre el atributo nombre del objeto
        // var apellido = this.apellido
        var { nombre, apellido } = this // es lo mismo que lo de arriba y se lee asi: del objeto this quiero los atributos nombre y apellido de ese objeto

        console.log(`Hola, Me llamo ${nombre} ${apellido} y soy desarrollador/a`)
        if (fn) { // si nos pasan una funcion (cuando llaman al metodo como parametro)
            fn(nombre, apellido, true) //llamamos a la funcion que nos mandan por parametro
        }
    }
}


function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen día ${nombre} ${apellido} (respondo al saludo a ${nombre})`)
    if (esDev) { // si es true ejecuta esto
        console.log(`Ah mira, no sabia que eras desarrollador/a`)
    }
}

// instanciamos a los objetos (creamos objetos de diferentes clases)
var sacha = new Persona("Sacha", "Lifszyc", 1.72)
var erika = new Persona("Erika", "Luna", 1.65)
var arturo = new Desarrollador("Arturo", "Martinez", 1.89)

sacha.saludar()
erika.saludar(responderSaludo)
arturo.saludar(responderSaludo)


// llamamos a un metodo y le mandamos una funcion por parametro 
// y en el metodo recibimos la funcion y evaluamos si nos mandan la funcion
// llamara a la funcion y le mandamos parametros A LA FUNCION
// y si cuando llamaron al metodo del objeto no mandaron una funcion como parametro no hara nada