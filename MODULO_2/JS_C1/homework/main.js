var nombreCompleto = prompt("Bienvenido a la calculadora de Indice de Masa Corporal, para iniciar digita tu nombre");
var alturaCm = prompt("Digita tu altura en cm");
var pesokg = prompt("Digita tu peso en kg");
var alturaMt = alturaCm/100;
var imc = pesokg/(alturaMt*alturaMt);

document.write(nombreCompleto, ". Su masa corporal es de: ", imc.toFixed(2));
