//const country = prompt("Escriba el pais de nacimiento")

//if (condicion){lo que quieres hacer si se cumple la condicion}

// else if (condicion){lo que quieres hacer si se cumple la condicion}

// else {lo que quieres hacer si no se cumple la condicion}

// if (country === "colombia"){
//     document.write("Eres colombiano")
// }

// if (country === "panama"){
//     document.write("Eres panameño")
// }

// if (country === "venezuela"){
//     document.write("Eres venezolano")
// }

// if (country === "peru"){
//     document.write("Eres peruano")
// }

// ejemplo else if

// if (country === "colombia"){
//     document.write("Eres colombiano")
// } else if (country === "panama"){
//     document.write("Eres panameño")
// } else if (country === "venezuela"){
//     document.write("Eres venezolano")
// } else if(country === "peru"){
//     document.write === "Eres peruano"
// } else {
//     document.write("Digita otra nacionalidad")
// }


//RETO

// const genero = prompt("digita tu genero")
// const edad = Number(prompt("Digita tu edad"))


// if(edad < 18){
//     document.write("No puedes ingresar")
// } else if(genero === "femenino"){ 
//     document.write("Ingresas gratis")
// } else if (genero=== "masculino") {
//     document.write("Paga cover de $30000")
// }


//RETO 2

const color = prompt("DIgita el color de tu camiseta").toLowerCase(); //convertir caracteres a minuscula
const talla = prompt("Inserta la talla de tu camiseta").toUpperCase(); //Convertir caracteres a mayuscula

if(color === "azul" && talla === "l"){
    document.write("Hay 4 camisetas azules en talla L")
} else if (color === "azul" && talla === "m") {
    document.write("Hay 10 camisetas azules en talla M")
} else if (color === "azul" && talla === "s"){
    document.write("Hay 6 camisetas azules en talla S")
} else if (color === "amarillo" && talla === "m"){
    document.write("Hay 8 camisetas amarillas en talla M")
} else if (color === "verde" && talla ==="s"){
    document.write("hay dos camisetas verdes en talla S")
} else {
    document.write("No hay camisetas disponibles")
}
