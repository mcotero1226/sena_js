// class Persona {
//   constructor(nombre, edad) {
//     this.nombre = nombre;
//     this.edad = edad;
//   }

//   saludar() {
//     console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
//   }
// }
// const persona1 = new Persona("Carlos", 30);
// persona1.saludar();


// class carro{//creamos una clase carro
//     constructor(tipoDecarro,modelo){ //El constructor es una función especial que 
//                                       // se ejecuta automáticamente cuando creas un nuevo objeto.
                                      
//         this.tipoDecarro=tipoDecarro;//creamos los un costructor
//         this.modelo=modelo;
    
//     }
//     sonido() {
//         console.log(`el tipo de carro es : ${this.tipoDecarro} y su modelo es : ${this.modelo}`)
//     }
// }
// const car=new carro('BWM-219',2000);
// const car2=new carro('BWM-219',2000);

// car.sonido();
// car2.sonido();

class Persona {
    constructor(nombre, edad){
        this.nombre=nombre;
        this.edad=edad;

    }
    presentarse(){
        console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad}`)
    }
}
const persona1= new Persona('mateo',18);
persona1.presentarse();

class circulo{
    constructor(radio){
        this.radio=radio;
    }
    mostrarArea(){
        let respuesta=Math.PI * this.radio * this.radio
        console.log(respuesta)

    }

}
const c1 = new circulo(5);
c1.mostrarArea(); // Área del círculo: 78.53981633974483


class libro {
    constructor(titulo,autor,anio){
        this.titulo=titulo;
        this.autor=autor;
        this.anio=anio;

    }
    descripcion(){
        console.log(`La descripcion de este libro es la siguiente TITULO :${this.titulo} y su autor ${this.autor} y el anio ${this.anio}`)
    }

}
const li=new libro('"los ultimos son los primeros"'.toUpperCase(),'"mateo"'.toUpperCase(),'2024');
li.descripcion();

class produc{
    constructor(nombre,precio){
        this.nombre=nombre;
        this.precio=precio;

    }
    aplicarDescuento(porcentaje){
        let resta= this.precio - (this.precio * porcentaje / 100);  
        return resta;
       

      
    }
}
const pre=new produc('ARROZ',400);
console.log(pre.aplicarDescuento(25));
console.log(pre.aplicarDescuento(82));
class Contador {
    constructor() {
        this.valor = 0;
    }
    incrementar(cantidad) {
        this.valor += cantidad;
        return this.valor;
    }
    disminuir(cantidad) {
        this.valor -= cantidad;
        return this.valor;
    }
    mostrarValor() {
       console.log(`Valor actual: ${this.valor}`);
    }
}
const contador1 = new Contador();
console.log(contador1.incrementar(40)); // 40
console.log(contador1.disminuir(10));   // 30
contador1.mostrarValor();               // Valor actual: 30


class cuentaBancaria {
    constructor(titulo) {
        this.titulo=titulo;
        this.saldo=0;   
    }
    depositar(cantidad){
        this.saldo +=cantidad
        return this.saldo
    }
    retirar(cantidad){
        this.saldo-=cantidad
        return this.saldo
    }
    mostraraSaldo(){
       console.log(` Nombr dela cuenta :${this.titulo} tu saldo : ${this.saldo}`)
    }

}
const pata = new cuentaBancaria('mateo,'.toUpperCase());
console.log(pata.depositar(10));
console.log(pata.retirar(80));
pata.mostraraSaldo();



// Clase base (padre)
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


//polimosfirmo

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















