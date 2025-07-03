class Forma {
    constructor() {
        if (this.constructor === Forma) {
            throw new Error("No se puede instanciar una clase abstracta");
        }
    }
    
    calcularArea() {
        throw new Error("Método no implementado");
    }
    
    descripcion() {
        return "Soy una forma geométrica";
    }
}

class Circulo extends Forma {
    constructor(radio) {
        super();
        this.radio = radio;
    }
    
    calcularArea() {
        return Math.PI * this.radio * this.radio;
    }
    
    descripcion() {
        return `Soy un círculo con radio ${this.radio}`;
    }
}

class Rectangulo extends Forma {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }
    
    calcularArea() {
        return this.base * this.altura;
    }
    
    descripcion() {
        return `Soy un rectángulo con base ${this.base} y altura ${this.altura}`;
    }
}
const circulo2=new Circulo(12);
console.log(circulo2.calcularArea());
console.log(circulo2.descripcion());

const circulo1=new Circulo(21);
console.log(circulo1.calcularArea());
console.log(circulo1.descripcion());

const rectangulo=new Rectangulo();
console.log(rectangulo.calcularArea());
console.log(rectangulo.descripcion());

const rectangulo1=new Rectangulo();
console.log(rectangulo1.calcularArea());
console.log(rectangulo1.descripcion());
