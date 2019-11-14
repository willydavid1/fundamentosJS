// ejemplo tendremos a una persona y que esa persona cada año va a realizar deporte o va a bajar de peso

var willy = {
    nombre: "Willy",
    apellido: "Daconceicao",
    edad: 18,
    peso: 75
}

//simularemos el transcurso de un año y al final veremos cual es el peso
console.log(`Al inicio del año ${willy.nombre} pesa ${willy.peso}kg`)


// function aumentarDePeso(persona) {
//     return persona.peso += 200
// }

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365

//definiremos las funciones como arrow function - tienen efecto de lado modificando el objeto global
const aumentarDePeso = (persona) => persona.peso += INCREMENTO_PESO //INCREMENTAREMOS EL PESO DE LA PERSONA EN 200GRAMOS
const adelgazar = (persona) => persona.peso -= INCREMENTO_PESO // se lee asi: funcion adelgazar, recibe por parametro un objeto y de ese objeto al atributo peso le resto 200


// la persona puede aumentar de peso o adelgazar en 200 gramos
// contador, condicion, incremento
for (var i = 1; i <= DIAS_DEL_ANO; i++) { // El contador se va a iniciar en 1, si la condicion se cumple el codigo que esta dentro de las llaves se va a ejecutar y cada vez que se ejecute el codigo iremos incrementando el contador en 1
    var random = Math.random() //llamamos al modulo math y que nos de un numero random desde 0 - 1 

    if (random < 0.25) {//si ese numero random es menor al 0.25 aumenta de peso 200gramos a willy
        aumentarDePeso(willy)
        console.log(willy.peso.toFixed(5))
        
            
    } else if (random < 0.5) { // si ese numero random es menor a 0.5 adelgaza de peso
        adelgazar(willy) //llama a la funcion y le mandamos un objeto
        console.log(willy.peso.toFixed(5)) 
    }

}

console.log(`Al final del año ${willy.nombre} pesa ${willy.peso.toFixed(5)}kg`)





// console.log(`Al inicio del año ${willy.nombre} pesa ${willy.peso}kg`)

// const INCREMENTO_PESO = 0.2
// const DIAS_DEL_ANO = 365

// const aumentarDePeso = (persona) => persona.peso += INCREMENTO_PESO
// const adelgazar = (persona) => persona.peso -= INCREMENTO_PESO

// for (var i = 1; i <= DIAS_DEL_ANO; i++) {
//     var random = Math.random() // 0-1

//     if (random < 0.25) {
//         aumentarDePeso(willy)
//     } else if (random < 0.5 ) {
//         adelgazar(willy)
//     }
// }

// console.log(`Al final del año ${willy.nombre} pesa ${willy.peso.toFixed(1)}kg`)


