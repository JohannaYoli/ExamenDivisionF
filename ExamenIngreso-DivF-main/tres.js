function mostrar()
{
	/*
Bienvenidos.
debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas, de cada persona debemos optener los siguientes datos:
Nombre, 
Obra Social ("PAMI", "OSDE" o "otras"), 
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor) 
y sexo (validar).
NOTA:el precio por pasajero es de  $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con osde de mas de 60 años. 
b) el nombre y temperatura de la mujer pami mas joven.
c) cuanto sale el viaje total sin descuento. 
d) si hay mas del 50% de los pasajeros que  pertenecen a PAMI, el precio final  tiene  un descuento del 25%, que solo mostramos si corresponde.*/


let nombre;
let obraSocial;
let edad;
let temperatura;
let sexo;
let seguir;

let contPami = 0;
let flag = 1;

let flag2 = 1;
let pamiJovenNombre;
let pamiJovenTemperatura;
let pamiEdad = 0;

let acumPrecio = 0;

let contPasajerosPami = 0;
let contTotalPasajeros = 0;
let precioFinal = 0;
let porcentaje = 0;

do {

	nombre = prompt("Ingrese el nombre");
	while (!isNan(nombre)) {
		nombre = prompt("Error. Ingrese el nombre");
	}

	obraSocial = prompt("Ingrese Obra Social PAMI/OSDE/otras: ").toLowerCase();
	while (obraSocial != "pami" || obraSocial != "osde" || obraSocial != "otras" ) {
		obraSocial = prompt("Error. Ingrese Obra Social PAMI/OSDE/otras: ").toLowerCase();
	}

	edad = parseInt(prompt("Ingrese edad :"));
	while (edad <= 17) {
		edad = parseInt(prompt("Error. Ingrese edad :"));
	}

	temperatura = parseFloat(prompt("Ingrese temperatura: ")).toFixed(2);
	while (temperatura < 0 || isNan(temperatura)) {
		temperatura = parseFloat(prompt("Ingrese temperatura: ")).toFixed(2);
	}

	sexo = prompt("Ingrese edad m/f: ").toLowerCase();
	while (sexo != "m" || sexo != "f" || !isNaN(sexo)) {
		sexo = prompt("Error. Ingrese edad m/f: ").toLowerCase();
	}

	if (flag || (obraSocial == 'osde' && edad > 60)) {
		contPami++;
		flag = 0;
	}

	if (flag2 || (pamiEdad < edad && obraSocial == 'pami' ) {
		pamiEdad = edad;
		pamiJovenNombre = nombre;
		pamiJovenTemperatura = temperatura;
		flag2 = 0;
	}

	if (obraSocial == "pami") {
		contPasajerosPami++;
	}

	acumPrecio += 600;
	contTotalPasajeros++;

	
	seguir = prompt("Desea seguir ingresando pasajeros: (s)");

} while (seguir == "s");


if (contPasajerosPami != 0) {
	porcentaje = contPasajerosPami * 100 / contTotalPasajeros;
	if (porcentaje > 50) {
		precioFinal = acumPrecio + ( acumPrecio * 0,5);
	}

}


if (contPami != 0) {
	console.log("Hay " + contPami + " mayores de 60 y con OSDE");
} else {
	console.log("No hay mayores de 60 y con OSDE");
}

console.log("La mujer mas joven con pami se llama " + pamiJovenNombre + " y su temperatura es de " + pamiJovenTemperatura + ".");

console.log("El precio del viaje total es de " + acumPrecio + ".");
if (contadorPasajerosPami != 0) {
	console.log("El precio final es de " + precioFinal);
} else {
	console.log("No hay descuento porque no hay pasajeros de PAMI");
}
 
//d) si hay mas del 50% de los pasajeros que  pertenecen a PAMI, el precio final  tiene  un descuento del 25%, que solo mostramos si corresponde.






}
