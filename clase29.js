const API_URL = "https://swapi.co/api/"
const PEOPLE_URL = "people/:id"

// para hacer un request en jquery | $ es una funcion
const options = { crossDomain: true }

const onPeopleResponse = function (persona) { //esta funcion solo se va a mandar por parametro y se va a ejecutar, si el request es exitoso
    // console.log(arguments) // los arguments es una variable que tienen todas las funciones, que nos da un array con todos los parametros que recibe la funcion
    console.log(`Hola, yo soy ${persona.name}`)
}

function obtenerPersonaje(id) {
    const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}` //obtenemos url
    $.get(url, options, onPeopleResponse) //hacemos el request y cuando termine ejecutamos el callback onPeopleResponse
}

obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)


// Creamos una función que le pasamos un parámetro en este caso el id y luego esta función ejecuta la petición referente a ese id que le pasamos y hace un callback a onPeopleResponse si es exitosa el request. NO SABEMOS EN QUE ORDEN NOS VAN A LLEGAR LAS RESPUESTAS

 

// Usando la librería jQuery realizamos una petición $get, esta recibe 3 parámetros:
//      URL: la dirección a la cual vamos a realizar la petición.
//      Propiedades: Propiedades que nos ayuden a realizar la petición (indicamos la petición hacia otra pagina, la api de star war)
//      Función: Una función que se invocara cuando obtengamos una respuesta (callback)

// $.get( LukeUrl, { crossDomain: true }, onResponse)

// Al momento de obtener los datos se va a ejecutar onPeopleResponse, esta función obtendrá el firstNamedel personaje de datay lo imprimirá en consola
// Un callback es una función que se pasa a otra función como un argumento. Esta función (parametro) se invoca, después, dentro de la función externa para completar alguna acción.


