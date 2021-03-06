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

// esta funcion nos devolvera true o false => si la persona es mayor o menor de edad, si o no se cumple una condicion
function esMayorDeEdad(persona) {
    return persona.edad >= MAYORIA_DE_EDAD
}

// imprimira en consola si es mayor de edad o menor
function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)){ //llamamos a la funcion y le pasamos como parametro el objeto 
        console.log(`${persona.nombre} es mayor de edad`)
    } else { //o sino
        console.log(`${persona.nombre} es menor de edad`)
    }
}