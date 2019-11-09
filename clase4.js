var nombre = "Willy", edad = 18

// DECLARAMOS LA FUNCION CON PARAMETROS
function imprimirEdad(n, e) {
    console.log(`${n} tiene ${e} años`)
}

// LLAMAMOS LAS FUNCIONES Y PODEMOS PASAR LOS PARAMETROS O NO. SI NO PASAMOS ALGUN PARAMETRO SERA undefined PERO DE IGUAL MANERA SE VA A EJECUTAR LA FUNCION
imprimirEdad(nombre, edad)
imprimirEdad("Vicky", 28)
imprimirEdad("Erick", 24)
imprimirEdad("Darío", 27)
imprimirEdad(25, "Darío")
imprimirEdad("JUAN")


