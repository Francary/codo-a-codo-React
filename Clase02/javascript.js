// Console Log Basico
let nombre = "Francary"
const apellido = "Molina"
console.log(`Hola ${nombre} ${apellido}`)

// Realizar Suma
alert("Hola vamos a realizar una Suma")

let num1 = Number(prompt("Ingresar primer numero:"))
let num2 = Number(prompt("Ingresar segundo numero:"))

const sumar = (num1,num2) =>{
    alert(` La suma de los 2 numero es: ${num1 + num2}`)
    document.write(` La suma de los 2 numero es: ${num1 + num2}<br><br>`)

}

sumar(num1,num2)

// Usar if Basico

let edad = 18
const mayorEdad = () =>{
if (edad >= 18){
    document.write(`Puede Ingresar es mayor de Edad`)
}
else{
    document.write(`No puedes pasar solmante tienes ${edad} años`)
}
}
mayorEdad()
