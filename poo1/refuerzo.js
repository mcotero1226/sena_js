// Clase abstracta
class Gente {
    #nacionalidad;
    #edad;
    #raza;

    constructor(nacionalidad, edad, raza) {
        if (new.target === Gente) {
            throw new Error("No se puede instanciar una clase abstracta.");
        }
        this.#nacionalidad = nacionalidad;
        this.#edad = edad;
        this.#raza = raza;
    }

    getNacionalidad() {
        return this.#nacionalidad;
    }

    setNacionalidad(nac) {
        this.#nacionalidad = nac;
    }

    getEdad() {
        return this.#edad;
    }

    setEdad(e) {
        this.#edad = e;
    }

    getRaza() {
        return this.#raza;
    }

    setRaza(r) {
        this.#raza = r;
    }
}

// Clase heredera
class Trabajador extends Gente {
    constructor(id, nombre, raza, edad, nacionalidad, cargo, sueldo) {
        super(nacionalidad, edad, raza);
        this.id = id;
        this.nombre = nombre;
        this.cargo = cargo;
        this.sueldo = sueldo;
    }

    toString() {
        return `ID: ${this.id}, Nombre: ${this.nombre}, Raza: ${this.getRaza()}, Edad: ${this.getEdad()}, Nacionalidad: ${this.getNacionalidad()}, Cargo: ${this.cargo}, Sueldo: ${this.sueldo}`;
    }
}


const trabajadores = [];


const cantidad = parseInt(prompt("¿Cuántos trabajadores desea registrar?"));


for (let i = 0; i < cantidad; i++) {
    const id = parseInt(prompt(`Ingrese el ID del trabajador ${i + 1}:`));
    const nombre = prompt("Ingrese el nombre:");
    const raza = prompt("Ingrese la raza:").toLowerCase();
    const edad = parseInt(prompt("Ingrese la edad:"));
    const nacionalidad = prompt("Ingrese la nacionalidad:").toLowerCase();
    const cargo = prompt("Ingrese el cargo:").toLowerCase();
    const sueldo = parseInt(prompt("Ingrese el sueldo:"));

    const t = new Trabajador(id, nombre, raza, edad, nacionalidad, cargo, sueldo);
    trabajadores.push(t);
}


console.log("📌 Lista de trabajadores registrados:");
trabajadores.forEach((t, i) => {
    console.log(`Trabajador ${i + 1}: ${t.toString()}`);
});


const cantidadAuxiliares = (() => {
    return trabajadores.filter(t =>
        t.cargo === "auxiliar" && t.sueldo === 3000000
    ).length;
})();
console.log(`\n📌 Cantidad de auxiliares con sueldo de 3 millones: ${cantidadAuxiliares}`);


const resumen = (() => {
    let sumaEdadNegros = 0;
    let totalChilenos = 0;

    trabajadores.forEach(t => {
        if (t.getRaza() === "negra") sumaEdadNegros += t.getEdad();
        if (t.includes("chile")) totalChilenos++;
    });

    const porcentajeChilenos = (totalChilenos / trabajadores.length) * 100;
    return [sumaEdadNegros, porcentajeChilenos.toFixed(2)];
})();


console.log(` Resultados estadísticos:`);
console.log(`La primera posición contiene la suma de edad de todos los trabajadores de raza negra: ${resumen[0]}`);
console.log(`La segunda posición contiene el porcentaje de trabajadores de Chile: ${resumen[1]}%`);

    