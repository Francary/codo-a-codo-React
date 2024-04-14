
// reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Francary" ;

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 38;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;

console.log(nuevoModulo + " AQUI ESTAMOS");

let devolverString = (str) => {
  // "Return" la string provista: str
  // Tu código:
return(str)
}
console.log(devolverString("Cadena de texto")); 


let suma = (x, y) => x + y
console.log("suma " + suma(10,10));

let resta = (x, y) => x - y
console.log("resta " + resta(20,5));

let multiplica = (x, y) => x * y
console.log("multiplicacion " + multiplica(5,5));

let divide = (x, y) => x / y
console.log("division " + divide(20,5));

let sonIguales = (x, y) =>  x === y  
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:utilizar if y else
console.log("Son Iguales ? " + sonIguales(10,0));

let tienenMismaLongitud = (str1, str2) => str1.length === str2.length
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
console.log("Comparar Longitud " + tienenMismaLongitud("Fran1","Fran2"));

let  menosQueNoventa = (num) => num < 90 
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:

console.log("Menor a 90? " + menosQueNoventa(90));

let mayorQueCincuenta = (num) => num > 50 
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:

console.log("Mayor a 50 ? " + mayorQueCincuenta(51));

let obtenerResto = (x, y) => x % y 
  // Obten el resto de la división de "x" entre "y"
  // Tu código:

console.log("Resto de Division " + obtenerResto(95,3) );

let esPar = (num) => num % 2 == 0
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
console.log("Es Par ? " + esPar(90));
  


let  esImpar = (num) => num % 2 != 0
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:

console.log("Es Impar ? " + esImpar(91));

let elevarAlCuadrado = (num) => Math.pow(num,2)
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
console.log("Al Cuadrado ? " + elevarAlCuadrado(6));


let elevarAlCubo = (num) => Math.pow(num,3)
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
console.log("Al Cubo ?" + elevarAlCubo(3));

let elevar = (num, exponent) => Math.pow(num,exponent)
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
console.log("Elevar al ? " + elevar(5,4));


let redondearNumero = (num) => Math.round(num)
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:

console.log("Redondear Numero ?" + redondearNumero(25.50));

let redondearHaciaArriba = (num) => Math.ceil(num) 
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
console.log("Redondear hacia Arriba " + redondearHaciaArriba(2.3));

let numeroRandom = () => Math.random()  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()

console.log("Esto es Random ? " + numeroRandom());

let esPositivo = (numero) =>  numero > 0? "Si es positivo":( numero < 0 ? "No es negativo": false)
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false

console.log("Es Positivo ? " + esPositivo(-1));

let agregarSimboloExclamacion = (str) => `${str} !`
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:

console.log(agregarSimboloExclamacion("Hello World"));

let combinarNombres = (nombre, apellido) => `Hola Soy ${nombre} ${apellido} `
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Bruce Wayne" -> "Bruce Wayne"
  // Tu código:
console.log(combinarNombres("Francary","Molina"));


let obtenerSaludo = (nombre) => `Hola ${nombre} !`
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
console.log(obtenerSaludo("Francary"));


let obtenerAreaRectangulo = (alto, ancho) => Math.abs( alto * ancho)
  // Retornar el area de un cuadrado teniendo su altura y ancho
  // Tu código:

console.log(obtenerAreaRectangulo(2,-3));

let retornarPerimetro = (lado) => Math.abs(lado * 4)
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí

console.log("Perimetro de un Cuadrado " + retornarPerimetro(5))

let  areaDelTriangulo = (base, altura) => (base *altura)/2
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí

console.log("Area de Un Tiangulo " + areaDelTriangulo(5,3));


let deEuroAdolar = (euro) => {
  return euro*1.20 
}

let convertir = document.getElementById("convertir")
let insertResultado = document.getElementById("resultado")
convertir.addEventListener("click",() =>{
  let euro = document.getElementById('euro').value
  let resultado = deEuroAdolar(euro)
  insertResultado.innerHTML= `Total Dolares: ${resultado}`
})
  //Supongamos que 1 euro equivale a 1.20 dólares. 
  //Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí



let verificar = document.getElementById("verificar")
let insertRespuesta = document.getElementById("revisar")
let esVocal = (letra) => {
if (letra.length > 1 ) return "Dato Incorrecto: Solo se permite un caracter"
if (/[aeiouáéíóú]/i.test(letra)) return "Es Vocal"
return "Dato Incorrecto: NO ES VOCAL"

  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
    //si ingresa una consonante muestre en pantalla dato incorrecto
  //Escribe tu código aquí
}
verificar.addEventListener('click',()=>{
  let letra =document.getElementById("vocal").value
  let revisar = esVocal(letra)
  insertRespuesta.innerHTML = `Verifcado : ${revisar}`
})

