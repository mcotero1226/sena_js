class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    
    hacerSonido() {
        return "El animal hace un sonido";
    }
}

// Clase derivada (hija)
class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre); // Llama al constructor de la clase padre
        this.raza = raza;
    }
    
    // Sobrescribe el método de la clase padre
    hacerSonido() {
        return "Guau guau!";
    }
    
    // Método adicional específico de Perro
    ladrar() {
        return `${this.nombre} está ladrando!`;
    }

    hacerSonidoGato() {
        return "Muiuuuu!";
    }
    
}

const pero1=new Perro("pomspaky","crollo");
console.log(pero1.hacerSonido());
console.log(pero1.ladrar());

const pero2=new Perro("sara","crollo");
console.log(pero2.hacerSonido());
console.log(pero2.ladrar());

const gato=new Perro("katy");
console.log(gato.ladrar());
console.log(gato.hacerSonidoGato());