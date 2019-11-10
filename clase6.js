var willy = {
    nombre: "Willy",//esto es un atributo del objeto
    apellido: "Daconceicao",
    edad: 18
}

var dario = {
    nombre: "Dario",
    apellido: "Susnisky",
    edad: 27
}



function imprimirNombreEnMayusculas({ nombre }) //esto lo que hace es acceder directamente al atributo nombre de ese objeto que le estamos pasando por parametro
{
    // var nombre = persona.nombre.toUpperCase() //le pasamos el objeto y va acceder a su clave nombre y lo que tenga como valor va a transformarlo a mayuscula y lo almacena en la variable local nombre 
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(willy) //accedemos al atributo nombre directamente de este objeto
imprimirNombreEnMayusculas(dario)
// imprimirNombreEnMayusculas({ nombre: "Pepito" }) //tambien podemos llamar a una funcion pero sin hacer refenrencia a una variable
imprimirNombreEnMayusculas({ apellido: "Gomez" }) // da error porque no encuentra el atributo apellido



