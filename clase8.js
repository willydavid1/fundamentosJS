var willy = {
    nombre: "Willy",
    apellido: "Daconceicao",
    edad: 18
}

var sacha = {
    nombre: "Sacha",
    apellido: "Lifszyc",
    edad: 28
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

function cumpleanos(persona) { //lo que hace esta funcion es devolver un nuevo objeto pero con una edad mas
    return{
<<<<<<< HEAD
        ...persona, // desglosa el objeto
=======
        ...persona,
>>>>>>> be1d4a7f29de914b2cca072891df032299325a84
        edad: persona.edad + 1 //la edad que tenga la persona vas a incrementar 1 y lo vas a guardar en su atributo lo modificamos
    }
}






