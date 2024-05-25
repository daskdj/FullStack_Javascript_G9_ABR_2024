//PUNTO 1

const base = Number(prompt("Digite el tamaño de la base en cm"))
const altura = Number(prompt("Digite el tamaño de la altura en cm "))

if (base === altura){
    document.write("<br> Es un cuadrado")
} else if (base > altura){
    document.write("<br> Es un Rectangulo horizontal")
} else {
    document.write("<br> Es un rectangulo vertical")
}


//PUNTO 2

const numero1 = Number(prompt("Digita el primer numero"))
const numero2 = Number(prompt("Digita el segundo numero"))
const operador = prompt("Digita que operacion desea realizzar").toUpperCase()

if (operador === "SUMA" || operador === "+"){
    document.write("<br> La operacion seleccionada es: Suma ", numero1, " + ", numero2, " = ", numero1 + numero2)
} else if(operador === "RESTA" || operador === "-"){
    document.write("<br> La operacion seleccionada es: Resta ", numero1, " - ", numero2, " = ", numero1 - numero2)
} else if(operador === "MULTIPLICACION" || operador === "*"){
    document.write("<br> La operacion seleccionada es: Multipicación ", numero1, " X ", numero2, " = ", numero1 * numero2)
} else if (operador === "DIVISION" || operador === "/"){
    document.write("<br> La operacion seleccionada es: División ", numero1, " / ", numero2, " = ", numero1 / numero2)
} else {
    document.write("Digite una operación valida")
}

//PUNTO 3

const number1 = Number(prompt("Ingresa un número"))
const number2 = Number(prompt("Ingresa un número"))

if (number1 < number2){
    document.write("<br> el número inferior es: ", number1)
} else if (number1 > number2){
    document.write("<br> El número inferior es: ", number2)
} else {
    document.write("<br> Los números son iguales")
}