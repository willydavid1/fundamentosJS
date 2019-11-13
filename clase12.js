var sacha = {
    nombre: "Sacha",
    apellido: "Lifszyc",
    edad: 28,
    ingeniero: false,
    cocinero: false,
    cantante: true,
    dj: false,
    guitarrista: false,
    drone: false
}

var juan = { //objeto con atributos
    nombre: "Juan",
    apellido: "Gomez",
    edad: 13
}

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es: `)

    if (persona.ingeniero){ //si la persona.ingeniero es igual a true se ejecutara esta condicion
        console.log("Ingeniero") //este console.log se ejecutara si la persona es ingeniero realmente
    } else { //o sino (y si no se ejecuta el if)
        console.log("No es ingeniero")
    }

    if (persona.cocinero){
        console.log("Cocinero")
    }

    if (persona.cantante){
        console.log("Cantante")
    }

    if (persona.dj){
        console.log("DJ")
    }

    if (persona.guitarrista){
        console.log("Guitarrista")
    }

    if (persona.drone){
        console.log("Piloto dron")
    }
}

// las constante no se pueden modificar y escribirlas en mayusculas y guiones bajos
const MAYORIA_DE_EDAD = 18

// es una variable que le asignamos una funcion | es una funcion anonima no tiene un nombre que se llama por la variable
// const esMayorDeEdad = function (persona) {
//     return persona.edad >= MAYORIA_DE_EDAD
// }

//arrow functions (es equivalente a una funcion llamada esMayorDeEdad, le vamos a mandar un objeto y de ese objeto vamos a agarrar el atributo edad y dentro de la flecha retornaria eso que seria el cuerpo de la funcion)
const esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD

// imprimira en consola si es mayor de edad o menor
function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)){ //llamamos a la funcion y le pasamos como parametro el objeto 
        console.log(`${persona.nombre} es mayor de edad`)
    } else { //o sino
        console.log(`${persona.nombre} es menor de edad`)
    }
}

// vamos a escribir una funcion que llamara a esMayorDeEdad y si la persona no es mayor de edad le negamos el acceso
function permitirAcceso(persona) {
    if (!esMayorDeEdad(persona)){ // si la persona no es mayor de edad
        console.log("ACCESO DENAGADO")
    }
}


//reto escribir la funcion es menor de edad como arrow functions y que retorne la negacion de la llamada es mayor de edad
const esMenorDeEdad = (persona) => !esMayorDeEdad(persona) //si es mayor de edad  devuelve false porque no es menor es mayor

// !true // false
// !false // true


