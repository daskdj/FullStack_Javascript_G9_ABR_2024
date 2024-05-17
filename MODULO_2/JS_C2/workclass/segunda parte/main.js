//condicionales if y else


//comparar variables
//1. igualdad ==
//2. Mayor >
//3. Menor <
//4. mayor o igual >=
//5. Menor o igual <=
//6. Igualdad exacta ===
//7. Diferencia !=

// Explicacion == & ====
// == -> comparar los valores sin tener en cuenta los tipos
// === -> compara si los valores y los tipos son iguales

//Ejemplo igualadad 
// -> 2 == 2 -> True
// -> 3 == 5 -> false
// Ejemplo igualdad exacta
// -> "32" === 32

//crear un programa que le pida al usuario la edad.
//para entrar a la pagina debe tener mas de 18 años.

// var age = prompt("Digita tu edad");

// //if (CONDICION){O QUE SUCEDE SI SE CUMPLE LA CONDICION}

// if(age >= 18){
//     document.write("Puedes ingresar a la pagina")
// } else {document.write("Eres menor de edad, no puedes ingresar")}

//reto:

//vamos a pedirle al usuario la nacionalidad y la almacena en una variable

// condicion (colombia), si se cumple ERES COLOMBIANO, ELSE Eres de otro pais

var nacionalidad = prompt("Ingrese su nacionalidad");
if(nacionalidad ==="colombia"){
    document.write("Eres Colombiano")
} else {document.write("Eres de otra nacionalidad")}