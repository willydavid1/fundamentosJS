var nombre = "Willy" // variable de alcance global porque no esta definida dentro de una funcion


//ESTO SERIA UN EJEMPLO DE UNA FUNCION CON VARIABLES GLOBALES CON UN EFECTO DE LADO SIDE EFFECTS (PORQUE ESTA MODIFICANDO LA VARIABLE GLOBAL NOMBRE)
// function imprimirNombreEnMayusculas()
// {
//     nombre = nombre.toUpperCase() 
//     console.log(nombre) 
// }
// imprimirNombreEnMayusculas() 

function imprimirNombreEnMayusculas(n) //AQUI UTILIZAMOS VARIABLES LOCALES PASANDO POR PARAMETRO EL NOMBRE PARA NO MODIFICAR LA VARIABLE GLOBAL NOMBRE.
{
    n = n.toUpperCase() //la variable nombre la pasamos a mayusculas y la guardamos en la variable nombre
    console.log(n)
}

imprimirNombreEnMayusculas(nombre)



