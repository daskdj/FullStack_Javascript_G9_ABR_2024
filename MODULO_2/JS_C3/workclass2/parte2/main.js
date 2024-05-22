


const paisDeOrigen = prompt("Digita tu país de origen")
const edad = Number(prompt("Digita tu edad:"))

//Realizar un programa que si es de colombia y es menor a 18 años debe pagar $18.000
// de lo contrario pagar 25.000


// if (paisDeOrigen === "colombia" && edad < 18) {
//     document.write("EL valor de tu entrada es $18.000")
// }

// else {
//     document.write("El valor de tu entrada es de $25.000")
// }


//operador OR. Realizar un programa que si es de colombia o si tiene menos de 18 de años, debe pagar $18.000, de lo contrario pagara $25.000

// if (paisDeOrigen === "colombia" || edad < 18) {
//     document.write("EL valor de tu entrada es $18.000")
// }

// else {
//     document.write("El valor de tu entrada es de $25.000")
// }

//reto
//realizar un programa que pida al usuario la edad y la nacionalidad
//si es de colombia y es menor de 18 años o mayor a 64 años debe pagar $15000, de lo contrario pagará  $20000


if ((paisDeOrigen === "colombia" && edad < 18) || edad > 64) {
    document.write("EL valor de tu entrada es $15.000")
}

else {
    document.write("El valor de tu entrada es de $20.000")
}