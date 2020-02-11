// factorial de un numero
function factorial (numero) {
    var inicial = 1; 

    // contador, condicion, incremento | mientras que la variable iteradora sea menor o igual a el numero del parametro ejecutaras el bucle
	for (i=1; i <= numero; i++) {

        // multiplica 1 * 1= 1, 1*2 = 2, 2*3 = 6, 6*4= 24 total vale 24 y se retorna
        inicial = inicial * i; 
	}
	return inicial; 
}

// factorial de dos numeros
const factorialMultiplicacion = (num1, num2) => {
    let factorialnum1 = 1;
    let factorialnum2 = 1;
    
    for (i=1; i <= num1; i++) {

        // multiplica 1 * 1= 1, 1*2 = 2, 2*3 = 6, 6*4= 24 factorialnum1 vale 24 y se retorna
        factorialnum1 = factorialnum1 * i; 
    }

    for (i = 1; i <= num2; i++) {
        // multiplica 1 * 1= 1, 1*2=2, 2*3= 6 factorialnum2 vale 6
        factorialnum2 = factorialnum2 * i; 
    }

    return factorialnum1 * factorialnum2
}

console.log("Factorial de 4: " + factorial(4))
console.log("Factorial de (2! . 3!): " + factorialMultiplicacion(2, 3))

