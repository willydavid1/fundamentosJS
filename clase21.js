// definiremos un prototipo que va a ser el prototipo de persona y va a hacer saludar y decir su nombre y apellido

// El flujo de esto es 1ero se crea el prototipo, 2do creamos atributos que son funciones, 3ero definimos el objeto


// Que hace new? la palabra reservada
//      Se crea un nuevo objeto como los que venimos trabajando
//      Y ese objeto(sacha) se le va a asignar como prototipo que le indiquemos después de new, luego se ejecutara ese constructor
//      Y se retorna ese objeto que acaba de construir(el objeto sacha)

//PARAMETROS
//      Podemos mandar parametros al prototipo(constructor)
//      en el constructor podemos recibir los parametros
//      Y para guardar esos parametros dentro del objeto(sacha) se hace referencia como this
//      Asi que podemos crear atributos a ese objeto this.nombre = nombre

// reto agregar el atributo altura que se le tiene que pasar al constructor
// agregar una funcion al prototipo de persona, que sea soyAlto
// cada persona va a retornar si es alta o no, deacuerdo si mide mas de 1.8mts



// definimos un prototipo o constructor, en los parametros va a requerir o inicializar una persona
function Persona(nombre, apellido, altura) {
    this.nombre = nombre // es un atributo del objeto que se esta creando
    this.apellido = apellido
    this.altura = altura
}
// le estamos diciendo que dentro del prototipo de persona, va a existir un atributo saludar, que sera una funcion
Persona.prototype.saludar = function () {
    console.log(`Hola, Me llamo ${this.nombre} ${this.apellido}`)
}
Persona.prototype.soyAlto = function () {
    if (this.altura > 1.8) {
        console.log("Eres alto mides mas de 1.8mts")
    } else {
        console.log("No eres alto mides menos de 1.8mts")
    }
}

// se va a ejecutar la funcion cuando creemos un objeto dado un prototipo
var sacha = new Persona("Sacha", "Lifszyc", 1.85)
var erika = new Persona("Erika", "Luna", 1.75)
var arturo = new Persona("Arturo", "Martinez", 1.81)







