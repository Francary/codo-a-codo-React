

let obtenerMayor = (x, y) =>  Math.max(x,y)
  // "x" e "y" son números enteros .
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
/* Metodos de MAth */
console.log(`Obtener Mayor: ${obtenerMayor(5,8)}`);

let mayoriaDeEdad = (edad) => edad >= 18 ? "Allowed o Permitido" : "Not Allowed o No Permitido"
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
console.log(`Es Mayor de Edad: ${mayoriaDeEdad(17)}`);

  
let conection = (status) =>  status == 1 ? "Online":(status==2? "Away":"Offline")
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
console.log(`Estado de Conexion: ${conection(1)}`);

let saludo = (idioma) =>  idioma == "aleman" ? "Guten Tag!":(idioma == "mandarin" ? "Ni Hao!":(idioma =="ingles"? "Hello!":"Hola" ))
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:

console.log(`Te Saludo: ${saludo("mandarin")}`);

let colors = (color) =>{

  switch(color) {
    case 'blue':
      return "This is blue";
    case 'red': 
      return "This is red";
    case 'green':
      return "This is green";
    case 'orange':
      return "This is orange";
    default:
      return "Color not found";
  }
}
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuelve --> "This is blue"
  //En caso que el color recibido sea "red", devuelve --> "This is red"
  //En caso que el color recibido sea "green", devuelve --> "This is green"
  //En caso que el color recibido sea "orange", devuelve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.

  console.log(`Que color es: ${colors('blue')}`);


let esDiezOCinco = (numero) => numero == 10 || numero == 5
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
console.log(` Es 10 0 5 ? ${esDiezOCinco(10)}`);


let estaEnRango = (numero) => numero < 50 && numero >20 
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
console.log(`Numero esta entre 20 y 50 ? ${estaEnRango(49)}`);

let esEntero = (numero) => numero/Math.floor(numero) ==1
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:

console.log(`Es un numero Entero ? ${esEntero(5)} `);

let fizzBuzz = (numero) => numero % 3 == 0 && numero % 5 == 0 ? "fizzbuzz":( numero % 3 == 0 ? "fizz":(numero % 5 == 0 ? "buzz": numero))
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  console.log(`Es divisible entre 3 o 5 ? ${fizzBuzz(3)}`);

let operadoresLogicos = (num1, num2, num3) =>{ 

  let mensaje1 = "Número 1 es mayor y positivo"
  let mensaje2 = "Hay negativos"
  let mensaje3 = num3 + 1
  let mensaje4 = "ERROR.... !!!"

 return num1 == 0 || num2 == 0 || num3 == 0 ? mensaje4 :
        num1 < 0 || num2 < 0 || num3 < 0 ? mensaje2:
        num1 > 0 && num1 > num2 && num1 >num3 ? mensaje1:
        num3 > num1 && num3 > num2 ?  mensaje3 :    
        false;

}
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 

console.log(`Que paso ? ${operadoresLogicos(6,3,5)}`);
console.log(`Que paso ? ${operadoresLogicos(6,-3,5)}`);
console.log(`Que paso ? ${operadoresLogicos(6,0,5)}`);
console.log(`Que paso ? ${operadoresLogicos(2,3,1)}`);
console.log(`Que paso ? ${operadoresLogicos(6,3,15)}`);

let esPrimo = (numero)  => {
  if( numero <= 1) return false
  for (let i = 2 ; i <= numero - 1 ; i++){
    if(numero % i === 0) return false 
  }
  return true
}
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos

console.log(`Es un numero Primo ? ${esPrimo(15)}`);
console.log(`Es un numero Primo ? ${esPrimo(7)}`);
console.log(`Es un numero Primo ? ${esPrimo(1)}`);

let  esVerdadero = (valor) => valor === true ? "Soy Verdadero":false
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  console.log(`Es Verdadero ? ${esVerdadero()}`);
  console.log(`Es Verdadero ? ${esVerdadero(true)}`);
  console.log(`Es Verdadero ? ${esVerdadero(false)}`);
  

let tablaDelSeis = () => {
  let tabla =[]
    for (let i = 0 ; i <= 60 ; i++){
      tabla.push(6*i)
   }
  return tabla
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   
}
console.log(tablaDelSeis());

let tieneTresDigitos= (numero) => numero.toString().length === 3 
  
  //Leer un número entero y determinar si tiene 3 dígitos.
  //Escribe tu código aquí
console.log(`Tiene 3 digiytos ?  ${tieneTresDigitos(33)}`);


let doWhile = (numero) => {
  let veces = 0
  do {
    numero += 5
    veces++
  } while (veces<8);

  return numero
}
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
console.log(`Incrementar 8 veces de 5 en 5 : ${doWhile(2)}`);


