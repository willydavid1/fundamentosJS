var nombre = "Willy", apellido = "Da Conceicao"

// pasa el string a mayusculas
var nombreEnMayusculas = nombre.toUpperCase()

// pasa el string a minusculas
var apellidoEnMinusculas = apellido.toLowerCase()

//para saber el primer caracter de un string
var primeraLetraDelNombre = nombre.charAt(0)

// para saber la cantidad de letras que tiene un string
var cantidadDeLetrasDelNombre = nombre.length

// concatenar dos string
var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`

// ACCEDER A UN SUBSTRING por tajadas un fregmento desde donde hasta donde referente a su indice
var str = nombre.substr(1,2)

// Desafío: Encuentra la última letra de su nombre
var ultimaLetraDelString = nombre.substr(-1)
