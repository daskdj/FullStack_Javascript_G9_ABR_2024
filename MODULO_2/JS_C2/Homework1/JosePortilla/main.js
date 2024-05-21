// var correctPassword = "kambcode"

// var password = prompt("Digite la contraseña para ingresar:")

// if(password === correctPassword){
//     document.write("Inicio de sesión exitoso")
// } else {
//     document.write("La contraseña ingresada no es correcta")
// }


// var dividendo = Number(prompt("Digite el dividendo"))
// var divisor = Number(prompt("Digite el divisor:"))
// if(divisor === 0){
//     document.write("El divisor no puede ser 0")
// } else {
//     document.write("Su división es: ", dividendo + "/" + divisor, ", y el resultado es: ", dividendo/divisor);

// }


var edadCliente = Number(prompt("Digite su edad: "))

if (edadCliente < 4){
    document.write("Su entrada es totalmente gratis")
} else if (edadCliente <= 18 ){

    document.write("Su entrada tiene un valor de 5 Euros")

} else if (edadCliente > 18){

    document.write("Su entrada tiene un valor de 18 Euros")
}