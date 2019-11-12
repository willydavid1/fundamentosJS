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


imprimirProfesiones(sacha)


// DESAFIO: escribir la función imprimirSiEsMayorDeEdad(persona){
//     // que imprima sacha es mayor de edad 
//     // sacha es menor de edad
// }


function imprimirSiEsMayorDeEdad(persona) {
    console.log("Aqui te dire si eres mayor de 18 años: ")
    if (persona.edad >= 18){
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad ok`)
    }
}