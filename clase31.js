// terminamos la clase anterior viendo que el servidor nos va a dar la respuesta, se la podemos pedir en cierto orden pero puede ser que el server nos responda de otra manera.
// la unica manera de mostrar en orden las respuestas es si mantenemos ese orden a lo largo del programa

const API_URL = "https://swapi.co/api/"
const PEOPLE_URL = "people/:id"
const options = { crossDomain: true }

// para hacer un request en jquery | $ es una funcion
function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}` //obtenemos url segun id parametro

    $
        .get(url, options, callback)
        .fail(() => { // Este metodo .fail() RecibeCallback y se va ejecutar si ocurre un error
        console.log("Sucedió un error. No se pudo obtener el personaje ${id}")
    })
}



// a esto se le conoce como callbackHell (infierno de los callbacks)
obtenerPersonaje(1, function (personaje) {
    console.log(`Hola, yo soy ${personaje.name}`)

    obtenerPersonaje(2, function (personaje) {
        console.log(`Hola, yo soy ${personaje.name}`)

        obtenerPersonaje(3, function (personaje) {
            console.log(`Hola, yo soy ${personaje.name}`)

            obtenerPersonaje(4, function (personaje) {
                console.log(`Hola, yo soy ${personaje.name}`)

                obtenerPersonaje(5, function (personaje) {
                    console.log(`Hola, yo soy ${personaje.name}`)

                    obtenerPersonaje(6, function (personaje) {
                        console.log(`Hola, yo soy ${personaje.name}`)

                        obtenerPersonaje(7, function (personaje) {
                            console.log(`Hola, yo soy ${personaje.name}`)
                        })
                    })
                })
            })
        })
    })
})

// PASOS
// mover el console.log a la logica del callback que nos llega por parametro
// el callback que mandamos por parametro, lo llamamos en el $.get

// Como funciona el callbackHell
// Obtenemos el personaje 1 y le mandamos como parametro el callback es el que utiliza jquery y dentro de la funcion la llamamos
// y hacemos un console.log del personaje con id 1 (el callback recibe el personaje como parametro)
// y dentro del callback llamamos la funcion obtener personaje 2 y le mandamos un callback
// HASTA AQUI NADA NUEVO SE LLAMA UNO SEGUIDO DEL OTRO

// Ahora llamamos a otro encadenado al metodo $.get().fail()
// este metodo .fail() RecibeCallback y se va ejecutar si ocurre un error
// de esta manera solucionamos el caso de que haya un error en la conexion con callbacks





// MODIFICAREMOS LA FUNCION obtenerPersonaje:
// Aceptara un segundo parametro que sera una funcion
// vamos a hacer que el primer callback, el que se ejecuta cuando termina el requests $.get
// en vez de ponerla en otra funcion la vamos a poner dentro del $.get - que termina ejecutando esa funcion
// con esto se hace lo mismo que habia anteriormente, llamar a un personaje por su id

// PARA GARANTIZAR EL ORDEN TENEMOS QUE IR LLAMANDO A LAS FUNCIONES CON CALLBACKS, perdemos el paralelismo de los requests
// vamos a tener que hacer un request y luego en un callback hacer otro request, asi hasta el infinito
// vamos a usar el segundo parametro a la funcion obtenerPersonaje, que le vamos a mandar una funcion(callback)
// le mandamos una funcion anonima como 2do parametro a obtenerPersonaje que va a ser un callback

// funciona asi vamos a llamar a obtenerPersonaje con el 1er parametro el id y el segundo un callback (funcion anonima)
// y cuando ya se obtenga el personaje id 1, se va a llamar al callback y obtendra el personaje 2
// y ese personaje 2 va a tener como callback el personaje 3 que se mandaran como parametro


