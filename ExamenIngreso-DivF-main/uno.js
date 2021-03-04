
function mostrar()
{
/*
Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto 
el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
Categoria ("desinfectante", "bactericida", "detergente" ) y 
el fabricante.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) La categoria con mas cantidad de unidades en total de la compra
c) Cuántas unidades de detergente con precios menos a 200 (inclusive) se compraron en total
d) el fabricante y Categoria del más caro de los productos
*/

let nombre;
let tipo;
let precio;
let cantidad;
let categoria;
let fabricante;

//a)
let contAlcohol = 0;
let contIac = 0;
let contQuat = 0;
let promAlcohol = 0;
let promIac = 0;
let promQuat = 0; 

//b)
let contDesinfectante = 0;
let contbactericida = 0;
let contDetergente = 0;
let maxCategoria;

//c)
let detergeteBarato = 0;

//d
let baratoCategoria = 0;
let baratoFabricante = 0;
let maxPrecio;
let flag = 1;

for (let index = 0; index < 5; index++) {

	nombre = prompt("Ingresar nombre: ");

	tipo = prompt("Ingresar tipo de producto AlCOHOL/IAC/QUAT: ").toLowerCase();
	while (tipo !="alcohol" && tipo != "iac" && tipo != "quat") {
		tipo = prompt("Error. Ingresar tipo de producto AlCOHOL/IAC/QUAT: ").toLowerCase();	
	}

	precio = parseFloat(prompt("Ingresar un precio entre 100 y 300: ")).toFixed(2);
	while (precio < 100 || precio > 300 || isNaN(precio)) {
		precio = parseFloat(prompt("Error. Ingresar un precio entre 100 y 300: ")).toFixed(2);	
	}
	cantidad = parseInt(prompt("Ingresar la cantidad (no puede ingresar más de mil unidades): "));
	while (cantidad <= 0 || cantidad > 1000 || isNaN(cantidad)) {
		cantidad = parseInt(prompt("Error. Ingresar la cantidad (no puede ingresar más de mil unidades) "));
	}	

	categoria = prompt("Ingresar la categoría desinfectante/bactericida/detergente: ").toLowerCase();
	while (categoria != 'desinfectante' && categoria != 'bactericida' && categoria != 'detergente') {
		categoria = prompt("Error. Ingresar la categoría desinfectante/bactericida/detergente: ").toLowerCase();
	}

	fabricante = prompt("Ingresar el fabricante: ");

//a) El promedio de cantidad por tipo de producto
switch (tipo) {
	case 'alcohol':
		contAlcohol++;
		break;
	case 'iac':
		contIac++;
	break;		
	case 'quat':
		contQuat++;
	break;
}

//b) La categoria con mas cantidad unidades en total de la compra
switch (categoria) {
	case 'desinfectante':
		contDesinfectante++;
		break;
	case 'bactericida':
		contbactericida++;
	break;		
	case 'detergente':
		contDetergente++;
	break;
}
//c) Cuántas unidades de detergente con precios menos a 200 (inclusive) se compraron en total

	if (categoria == 'detergente' && precio <= 200) {
		detergeteBarato++;
	}

//d) el fabricante y Categoria del más caro de los productos
	if (precio > maxPrecio || flag ) {
		maxPrecio = precio;
		baratoCategoria = categoria;
		baratoFabricante = fabricante;
		flag = 0;
	}

}

if (contAlcohol != 0) {
	promAlcohol = ( contAlcohol * 100 ) / 5;
}
if (contIac != 0) {
	promIac = ( contIac * 100 ) / 5;
}
if (contQuat != 0) {
	promQuat = ( contQuat * 100 ) / 5;
}

if (contDesinfectante > contbactericida && contDesinfectante > contDetergente ) {
	maxCategoria = contDesinfectante;
}
if (contbactericida > contDesinfectante && contbactericida > contDetergente ) {
	maxCategoria = contbactericida;
}
if (contDetergente > contbactericida && contDetergente > contDesinfectante ) {
	maxCategoria = contDetergente;
}

console.log("a) El promedio de cantidad por tipo de producto: ALCOHOL: " + promAlcohol + "% IAC: " + promIac + "% QUAT: " + promQuat + "%.");
console.log("b) La categoría con mas cantidad de unidades en total de la compra: " + maxCategoria + "." );
if (detergenteBarato != 0) {
	console.log("c) Se compraron un total de detergentes con precios menos a 200 (inclusive): " + detergeteBarato + ".") }
else{
	console.log("c) No se compraro detergentes con un precio menor a 200.");
}

console.log("d) el fabricante y Categoría del más caro de los productos: categoría " + maxCategoria + "fabricante: " + maxFabricant + "." );

}

// Ejercicio 3 b nombre temperatura de mujer pami mas joven
//obra socual por estado civil

