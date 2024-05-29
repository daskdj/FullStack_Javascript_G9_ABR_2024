




// edad usuario

var edadUsu = Number(prompt("digite su edad"))
var contador = 1

while( contador <= edadUsu){
    document.write(contador, "<br>")
     contador = contador + 1
}


// ahorro

var ahorro = Number(prompt("Digite el valor a ahorrar"))
var tiempo = Number(prompt("Ingrese el tiempo que quiere ahorrar"))
var contador2 = 1

while(contador2 <= tiempo) {
    document.write("su ahorro para el mes ", contador2, " es: $", ahorro * contador2, "<br>")
    contador2 = contador2 + 1
}
    document.write("<br> su ahorro final es $", ahorro * (contador2 - 1))
