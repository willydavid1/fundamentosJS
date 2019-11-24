
const API_URL = "https://swapi.co/api/"
const PEOPLE_URL = "people/:id"
const options = { crossDomain: true }

// para hacer un request en jquery | $ es una funcion
function obtenerPersonaje(id) {

    return new Promise( (resolve,reject) => { //resolve=resolver | reject=rechazado
        const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}` //obtenemos url segun id parametro
        $
            .get(url, options, function (data) {
                resolve(data) //si se resuelve la promesa, mandamos un parametro con data
            })
            .fail( () => reject(id) ) //si falla rechazamos la promesa y pasamos id
    } )  

}


function onError(id) {
    console.log(`Sucedio un error al obtener el personaje ${id}`)
}

var ids = [1, 2, 3, 4, 5, 6, 7]
// var promesas = ids.map(function (id) {
//     return obtenerPersonaje(id)
// })
var promesas = ids.map( (id) => obtenerPersonaje(id) ) //esto es un array lleno de promesas
Promise
    .all(promesas)
    .then( (personajes) => console.log(personajes) ) //si se resuelve la promesa
    .catch( onError ) //si sucede algun error de cualquiera de las promesas falla


// multiples promesas en paralelo 
// lo que vamos a hacer es guardarnos en un array los ids de los personajes que queremos
// Y vamos a generar un nuevo array con multiples promesas, donde cada elemento del array sea una promesa la de obtenerPersonaje(id)
// con el metodo .map() del array, que toma un array y modifica cada uno de sus elementos
// Vamos a recorrer el array ids y con cada uno de sus elementos vamos a retornar un elemento nuevo que sera una promesa y las guardamos en la variable promesas

// el .map va a recibir a cada elemento del array un id y retorna un nuevo array modificado ese metodo
// por cada elemento (es decir por cada id) retornemos una promesa return obtenerPersonaje(id)
// y tendremos en la variable promesas un array con todas esas promesas, resueltas

// COMO OBTENEMOS LOS VALORES DE ESTAS PROMESAS CUANDO SE RESUELVAN
// utilizamos un metodo de promise.all() => que lleva como parametro un array de promesas | Promise.all(promesas)
// y ese metodo se puede encadenar a un .then() recibimos por parametro a la data y la imprimimos y alli vamos a tener un array con los valores que esperamos de las promesas
// y si sucede algun error utilizamos el .catch(onError)





// llamamos a la  funcion obtenerPersonaje
// obtenerPersonaje(1)
//     .then( (personaje1) => {
//         console.log(`El personaje 1 es ${personaje1.name}`)
//         return obtenerPersonaje(2)
//     })
//     .then(personaje2 => {
//         console.log(`El personaje 2 es ${personaje2.name}`)
//         return obtenerPersonaje(3)
//     })
//     .then(personaje3 => {
//         console.log(`El personaje 3 es ${personaje3.name}`)
//         return obtenerPersonaje(4)
//     })
//     .then(personaje4 => {
//         console.log(`El personaje 4 es ${personaje4.name}`)
//         return obtenerPersonaje(5)
//     })
//     .then(personaje5 => {
//         console.log(`El personaje 5 es ${personaje5.name}`)
//         return obtenerPersonaje(6)
//     })
//     .then(personaje6 => {
//         console.log(`El personaje 6 es ${personaje6.name}`)
//         return obtenerPersonaje(7)
//     })
//     .then(personaje7 => {
//         console.log(`El personaje 7 es ${personaje7.name}`)
//     })
//     .catch(onError)

// PROMESAS ENCADENADAS
// al resolver la promesa en .then() al valor del personaje
// vamos a retornar otra promesa dentro de la funcion| return obtenerPersonaje(2)
// asi el metodo .then() vamos a estar devolviendo la promesa ya que la funcion obtenerPersonaje(2) nos devuelve una promesa, la de obtener el personaje 2

// Y COMO HACEMOS PARA OBTENER EL RESULTADO DEL REQUEST CON ID 2
// seguimos encadenando con .then() y ejecutamos un console.log | .then(personaje => {console.log(`El personaje 2 es ${personaje.name}`) return obtenerPersonaje(3) })
// lo que hace es retornar la promesa para obtener el personaje 2 y cuando se resuelva la promesa
// obtenemos ese nuevo valor con un nuevo .then( (personaje) => {} ) que nos llega por parametro a la funcion el valor
// si sucede algun error el catch es el mismo para todos

// Funciona así cuando termine lo resuelto en el .then() de la promesa retornamos obtenerPersonaje(2) con un id (volvemos a llamar a la función y realiza el request), lo pedimos al personaje referente a un id y lo recibimos nuevamente con otro .then cuando esa promesa haya sido resuelta. El catch es el mismo para todos
// Estos requests se estan haciendo en serie y no en pararelo




// PASOS PARA LAS PROMESAS?
// Vamos a modificar la funcion de obtenerPersonaje para que retorne una promesa en vez de que reciba un callback
// vamos a retornar una promesa y al constructor de la promesa le mandamos 
// una funcion que tiene como parametro (resolve,reject) | return new Promise( (resolve,reject) => {}
// dentro de la funcion de la promesa vamos a realizar el llamado asincrono
// en la peticion get atravez de llamar al callback vamos a ejecutar una funcion
// y cuando esa funcion se ejecute vamos a llamar al resolve(data) mandandole la data al personaje segun el id, y no se va llamar esa funcion resolve hasta que el get sea existoso
// entoces si se resulve la promesa llamamos a resolve() y si falla rechazamos la promesa


// PARA LLAMAR LO HACEMOS DE LA SIGUIENTE MANERA
// llamamos a la funcion y le mandamos como parametro el id | obtenerPersonaje(1)
// La forma de obtener el valor que esperamos de una promesa es llamando al .then()
// al .then tenemos que pasarle una funcion que se va a ejecutar cuando la promesa se resuelva
// la funcion que mandamos al .then recibe la persona, la data que mandamos desde el resolve(data)
// y definimos que queremos hacer la mostramos por consola

// Y SI SUCEDE ALGUN ERROR 
// utilizamos el metodo .catch() que tenemos que pasarle como parametro una funcion
// esta recibira el id que mandamos desde el rejected(id)
// y por ultimo imprimimos en pantalla sucedio un error a tal id

// Conclusión podemos decir que definimos un objeto de tipo promesa, si se resuelve la promesa llamamos la funcion resolve() y si falla rechazamos la promesa con rejected() luego podemos obtener estos valores con .then() para el resolve() y .catch() para .rejected() | el .then() y .catch() reciben como parámetros lo que mandemos de las promesas y tenemos que mandarle una función a estos métodos que reciben los parámetros. | .then(function (personaje) {console.log(`El personaje 1 es ${personaje.name}`) })

