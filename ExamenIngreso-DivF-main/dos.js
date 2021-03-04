function mostrar()
{
/*Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
nombre
situcación laboral ("buscando" , "trabajando" o "solo estudiante")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no de los que tarbajan o estan buscando
b) El nombre del mas viejo de los alumnos que solo sea estudiantes
c) El promedio de nota por situacion laboral
d) La edad y nombre del que cursa menos cantidad de materias y que este buscando trabajo */

let situacionLaboral;
let materias;
let sexo;
let nota;
let edad;
let seguir;


let mejorPromedio = 0;
let mejorPromedioNombre;
let flag = 1;

let alumnoViejo;
let alumnoViejoNombre;
let flag2 = 1;

let contTrabajando = 0;
let contEstudiante = 0;
let contBuscando = 0;
let acumTrabajandoNota = 0;
let acumBuscandoNota = 0;
let acumEstudianteNota = 0;
let promTrabajando = 0;
let promBuscando = 0;
let promEstudiante = 0;

let menosMateriasNombre;
let menosMateriasEdad;
let menosMaterias;
let flag3 = 1;

do {
  


  situacionLaboral = prompt("Ingrese su situcación laboral buscando/trabajando/estudiante:" ).toLowerCase();
  while (situacionLaboral != 'buscando' && situacionLaboral != 'trabajando' && situacionLaboral != 'estudiante') {
    situacionLaboral = prompt("Error. Ingrese su situcación laboral buscando/trabajando/estudiante:" ).toLowerCase();
  }

  materias = parseInt(prompt("Ingrese la cantidad de materias "));
  while (materias < 0 || materias > 8 || isNaN(materias) ) {
    materias = parseInt(prompt("Error. Ingrese la cantidad de materias: "));
  }

  sexo = prompt("Ingrese su sexo femenino/masculino/no binario").toLowerCase();
  while (sexo !=  "femenino" || sexo !=  "masculino" || sexo !=  "no binario") {
    sexo = prompt("Error. Ingrese su sexo femenino/masculino/no binario").toLowerCase();
  }

  nota = parseInt(prompt("Ingrese la nota: "));
  while (nota < 0 || nota > 10 || isNan(nota)) {
    nota = parseInt(prompt("Ingrese la nota: "));
  }

  edad = parseInt(prompt("Ingrese la edad: "));
  while (edad < 0 || isNaN(edad)) {
    edad = parseInt(prompt("Error. Ingrese la edad: "));
  }

  seguir = prompt("Desea seguir ingresando alumnos: ")

  

  if ( flag || (mejorPromedio < nota && situacionLaboral == "estudiante" )  ) {
    mejorPromedio = nota;
    mejorPromedioNombre = nombre;
    flag = 0;
  }

  if ( flag2 || (alumnoViejo < edad && situacionLaboral == "estudiante")  ) {
    alumnoViejoEdad   = edad;
    alumnoViejoNombre = nombre;
    flag2 = 0;
  }

  switch (situacionLaboral) {
    case 'trabajando':
      contTrabajando++;
      acumTrabajandoNota += nota;
      break;
    case 'buscando':
      contBuscando++;
      acumBuscandoNota += nota;
      break;
    case 'estudiante':
      contEstudiante++;
      acumEstudianteNota += nota;
      break;
  }

  if ( flag3 || (menosMaterias < materias && situacionLaboral == "buscando")  ) {
    menosMaterias = materias;
    menosMateriasEdad   = edad;
    menosMateriasNombre = nombre;
    flag3 = 0;
  }

  prompt("Desea seguir cargando alumnos(ingrese s): ");
} while (seguir == 's');


  if (contTrabajando != 0) {
    promTrabajando = acumTrabajandoNota / contTrabajando;
  }
  if (contBuscando != 0) {
    promBuscando = acumBuscandoNota / contBuscando;
  }
  if (contEstudiante != 0) {
    promEstudiante = acumEstudianteNota / contEstudiante;
  }


console.log("a) El nombre del mejor promedio de los estudiantes es :" + mejorPromedioNombre + ".");
console.log("b) El nombre del mas viejo de los alumnos que solo es estudiantes es: " + alumnoViejoNombre + ".");
console.log("c) Promedio trabajando: " + promTrabajando + " promedio buscando: " + promBuscando + " promedio estudiando: " + promEstudiante + ".");
console.log("d) El alumno que cursa menos materias se llama " + menosMateriasNombre + " y tiene " + menosMateriasEdad + "." );

}
