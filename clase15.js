// vamos a ver cuantas veces una persona va a la esquina a ver si llueve o no
// y crearemos una funcion para ver si esta lloviendo o no
var contador = 0

const llueve = () => Math.random() < 0.25 // si el random es menor a 0.25 estara lloviendo

//vamos a hacer algo al menos una vez hasta que se cumpla la condicion
do {
    contador++
} while (!llueve()) // si no llueve el do se ejecutara pero si llueve se dejara de ejecutar| si la condicion se cumple el do se vuelve a ejecutar

if (contador === 1) {
    console.log(`Fui a ver si llovia ${contador} vez, en la esquina y cae el palo de agua`)
} else {
    console.log(`Fui a ver si llovia ${contador} veces, en la esquina y cayo el palo de agua`)
}