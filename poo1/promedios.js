class Estudiante {
  constructor(nombre, nota1, nota2, nota3) {
    this.nombre = nombre;
    this.nota1 = nota1;
    this.nota2 = nota2;
    this.nota3 = nota3;
  }

  calcularPromedio() {
    return ((this.nota1 + this.nota2 + this.nota3) / 3).toFixed(2);
  }

  estado() {
    let promedio = this.calcularPromedio();
    if (promedio >= 3.0) {
      return "Aprobó";
    } else {
      return "Reprobó";
    }
  }
}

// Crear estudiante
let estudiante1 = new Estudiante("Mateo", 3.5, 2.8, 4.0);

// Mostrar resultados
console.log("Nombre:", estudiante1.nombre);
console.log("Promedio:", estudiante1.calcularPromedio());
console.log("Estado:", estudiante1.estado());


console.log('.............................................................')


let grupo = [
  new Estudiante("Mateo", 3.0, 2.5, 3.8),
  new Estudiante("Juan", 1.8, 2.0, 2.5),
  new Estudiante("Camila", 4.5, 4.7, 4.0)
];

for (let i = 0; i < grupo.length; i++) {
  let est = grupo[i];
  console.log(` ${est.nombre} - Promedio: ${est.calcularPromedio()} - ${est.estado()}`);
}



let suma = 0;

for (let i = 0; i < grupo.length; i++) {
  suma += parseFloat(grupo[i].calcularPromedio());
}

let promedioGrupo = (suma / grupo.length).toFixed(2);
console.log(" Promedio general del grupo:", promedioGrupo);
