// vimos que con los callbacks, tenemos un problema muy grande y es que
// cuando llamamos un callback dentro de otro callback y ese callback llama a otro asi sucesivamente
// nuestro codigo se vuelve bastante ilegible 
// para resolver este problema aparecen las promesas


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

// llamamos a la  funcion obtenerPersonaje
obtenerPersonaje(1)
    .then(function (personaje) {
        console.log(`El personaje 1 es ${personaje.name}`)
    })
    .catch(onError)

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

