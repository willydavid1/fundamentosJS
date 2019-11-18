// PARA QUE UN PROTOTIPO HEREDE DE OTRO
function heredaDe(prototipoHijo, prototipoPadre) {
    //le asignaremos un prototipo al prototipo hijo
    var fn = function () {}
    fn.prototype = prototipoPadre.prototype // a la funcion fn le asignaremos el prototipo padre
    prototipoHijo.prototype = new fn//al prototipo hijo a su prototype sera un nuevo objeto 

    prototipoHijo.prototype.constructor = prototipoHijo // asignamos la funcion constructora
}




// definimos un prototipo o constructor, en los parametros va a requerir o inicializar una persona
function Persona(nombre, apellido, altura) {
    this.nombre = nombre // es un atributo del objeto que se esta creando
    this.apellido = apellido
    this.altura = altura
}

// le estamos diciendo que dentro del prototipo de persona, va a existir un atributo saludar, que sera una funcion
Persona.prototype.saludar = function() {
    console.log(`Hola, Me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function() {
    return this.altura > 1.8
}

// prototipo - funcion que se ejecutara cuando creemos nuevos dev
function Desarrollador(nombre, apellido) {
    this.nombre = nombre // es un atributo del objeto que se esta creando
    this.apellido = apellido
}

heredaDe(Desarrollador, Persona) //llama a la funcion para que desarrollador tenga todos los metodos de persona

// pisamos la funcion que tenia la persona
Desarrollador.prototype.saludar = function () {
    console.log(`Hola, Me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
}


// var sacha = new Persona("Sacha", "Lifszyc", 1.72)
// var erika = new Persona("Erika", "Luna", 1.65)
// var arturo = new Persona("Arturo", "Martinez", 1.89)