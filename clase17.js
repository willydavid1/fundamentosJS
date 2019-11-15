var sacha = {
    nombre: "Sacha",
    apellido: "Lifszyc",
    altura: 1.72
}

var alan = {
    nombre: "Alan",
    apellido: "Gomez",
    altura: 1.86
}

var martin = {
    nombre: "Martin",
    apellido: "Gomez",
    altura: 1.85
}

var dario = {
    nombre: "Dario",
    apellido: "Juarez",
    altura: 1.71
}

var vicky = {
    nombre: "Vicky",
    apellido: "Zapata",
    altura: 1.56
}

var paula = {
    nombre: "Paula",
    apellido: "Barros",
    altura: 1.76
}


// PARA ACCEDER A UN ELEMENTO DEL ARRAY | personas[indice] ejemplo persona[0] // retorna el objeto sacha
// PARA ACCEDER A UN ATRIBUTO DE UN OBJETO QUE ESTA DENTRO DEL ARRAY | personas[0].altura o personas[0]["altura"] // retorna el atributo altura de sacha

// Vamos a guardar a todas esas personas dentro de una misma coleccion
var personas = [sacha, alan, martin, dario, vicky, paula]

// recorreremos el array y imprimir la altura de cada objeto
// contador, condicion, incremento
for (var i = 0; i < personas.length; i++) { // en la condicion se lee asi: si el contador(indice) es menor que los elementos que tengo en el array
    var persona = personas[i] // guardamos a cada persona por su indice | la variable persona es el objeto | i sera el indice
    console.log(`${persona.nombre} mide ${persona.altura}mts , la varible i - indice(contador) vale:${i}`)
}