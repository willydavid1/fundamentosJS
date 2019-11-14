// le diremos el horoscopo al usuario
var signo = prompt("Cual es tu signo?") // pregunta algo al usuario

switch (signo) {
    case "acuario": //en caso que la var signo tenga como valor acuario ejecuta este caso
        console.log("Entienda que la carencia de confianza propia podría llegar a ser un obstáculo en su vida. Es el momento para que trate de combatir ese estado.")
        break
    case "piscis": //en caso que la var signo tenga como valor piscis ejecuta este caso
        console.log("Deje de querer controlar todo lo que sucede a su alrededor. Entienda que esa actitud no le es beneficiosa, ya que su entorno podría oponerse.")
        break
    case "cancer": //en caso que la va signo tenga como valor cancer ejecuta este caso
    case "cáncer":
        console.log("Prepárese, ya que se acerca el momento propicio para demostrar al mundo lo que usted es capaz de brindar. Intente ser más solidario, no espere nada a cambio.")
        break
    case "gemenis":
    case "géminis":
        console.log("(GEMINIS) Aprenda a vivir cada momento con intensidad, ya que le sobrarán fuerzas para sortear los obstáculos que se le presenten durante esta jornada.")
        break
    default: // cuando no encuentre algun caso ejecutara esto
        console.log("No es un signo zodiacal valido")
        break
}