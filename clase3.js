// incremento en uno el valor de la variable
var edad = 27
// edad = edad + 1
edad += 1

// suponemos que perdi 2kg | RESTA
var peso = 75
// peso = peso - 2
peso -= 2

// SUMAMOS DOS NUMEROS DISTINTOS | SUMA|
var sandwich = 1 
peso += sandwich // retorna 74 teniamos 75 restamos 2 y sumamos sandwich

// restamos en 3 el valor de peso | RESTA
var jugarAlFutbol = 3
peso -= jugarAlFutbol // valia 74 y si juego al futbol vale 71 la variable peso

// numero decimales | MULTIPLICACION | la precisión de decimales no es exacta cuando los calcula ejemplo una multiplicación se soluciona de varias maneras.
var precioDeVino = 200.3
var total = Math.round(precioDeVino * 100 * 3) / 100 // redondea lo que esta dentro de la funcion y luego dividela entre 100 

// PARA DECIRLE QUE MUESTRE 2 DECIMALES 
var totalStr = total.toFixed(2) //devuelve el decimal con dos decimales en string
var total2 = parseFloat(totalStr) // pasa el str a flotante

// Para hacer divisiones | LA PIZZA TIENE 8 PORCIONES Y COMERAN 2 PERSONAS, cuantas porciones tiene que comer cada persona
var pizza = 8 
var personas = 2
var cantidadDePorcionesPorPersona = pizza / personas
