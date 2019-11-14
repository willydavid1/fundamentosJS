var willy = {
    nombre: "Willy",
    apellido: "Daconceicao",
    edad: 18,
    peso: 75
}

// un nutricionista le dice a una persona baja 3kg de tu peso, SI HACE DEPORTE ADELGAZA Y SI COME MUCHO AUMENTARA 300GRAMOS

console.log(`Al inicio del año ${willy.nombre} pesa ${willy.peso}kg`)

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANO = 365

const aumentarDePeso = (persona) => persona.peso += INCREMENTO_PESO
const adelgazar = (persona) => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3 // el numero random es menor a 0.3, el 30% come mucho
const realizaDeporte = () => Math.random() < 0.4 // el numero random es menor a 0.4 , 40% de los dias realiza deporte

const META = willy.peso - 3 // meta adelgazar de ese peso 3kg META == 72
var dias = 0

// condicion y mientras sea verdad se va a ejecutar
while (willy.peso > META) { // MIENTRAS EL PESO DE WILLY ESTE POR ARRIBA DE LA META (72) SE VA A EJECUTAR ESTO
    // debugger 
    if (comeMucho()) { // retorna true or false, //si come mucho aumenta de peso
        aumentarDePeso(willy)
    }
    if (realizaDeporte()) { // retorna true or false, //si hace deporte adelgaza
        adelgazar(willy)
    }
    dias += 1
}

console.log(`Pasaron ${dias} dias hasta que ${willy.nombre} adelgazo 3kg (la meta)`)