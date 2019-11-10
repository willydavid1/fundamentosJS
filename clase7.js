var willy = {
    nombre: "Willy",
    apellido: "Daconceicao",
    edad: 18
}

var dario = {
    nombre: "Dario",
    apellido: "Susnisky",
    edad: 27
}

function imprimirNombreEnMayusculas(persona) 
{
    // var nombre = persona.nombre // ESTO ES LO MISMO QUE LO DE ABAJO
    var { nombre } = persona // VAMOS A DECLARAR LA VARIABLE NOMBRE, y que de ese objeto PERSONA tomes el atributo nombre
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(willy) 
imprimirNombreEnMayusculas(dario)
// imprimirNombreEnMayusculas({ nombre: "Pepito" }) //tambien podemos llamar a una funcion pero sin hacer refenrencia a una variable
// imprimirNombreEnMayusculas({ apellido: "Gomez" }) 


// reto
function imprimirNombreYEdad(persona){
    var { edad } = persona //VAMOS A DECLARAR LA VARIABLE edad, y que de ese objeto PERSONA tomes el atributo nombre
    var { nombre } = persona // VAMOS A DECLARAR LA VARIABLE NOMBRE, y que de ese objeto PERSONA tomes el atributo nombre
    console.log(`Hola me llamo ${nombre} y tengo ${edad} años`)
    // este es el mensaje a imprimir : Hola, me llamo Dario y tengo 27 años
}
imprimirNombreYEdad(willy)
imprimirNombreYEdad(dario)