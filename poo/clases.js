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

 

class CuentaBancaria {
    #saldo; // Propiedad privada
    #historialTransacciones = [];
    
    constructor(titular, saldoInicial) {
        this.titular = titular; // Propiedad pública
        this.#saldo = saldoInicial; // Inicializa el saldo privado
    }
    
    // Métodos públicos para interactuar con propiedades privadas
    consultarSaldo() {
        return `El saldo actual es $${this.#saldo.toFixed(2)}`;
    }
    
    depositar(cantidad) {
        if (cantidad > 0) {
            this.#saldo += cantidad;
            this.#registrarTransaccion('Depósito', cantidad);
            return `Depósito de $${cantidad} realizado con éxito`;
        } else {
            return "Error: La cantidad debe ser positiva";
        }
    }
    
    retirar(cantidad) {
        if (cantidad > 0 && cantidad <= this.#saldo) {
            this.#saldo -= cantidad;
            this.#registrarTransaccion('Retiro', cantidad);
            return `Retiro de $${cantidad} realizado con éxito`;
        } else {
            return "Error: Cantidad inválida o fondos insuficientes";
        }
    }
    
    // Método privado
    #registrarTransaccion(tipo, cantidad) {
        const transaccion = {
            tipo,
            cantidad,
            fecha: new Date().toISOString()
        };
        this.#historialTransacciones.push(transaccion);
    }
}



class Producto {
    #nombre;
    #precio;
    #descuento = 0;
    
    constructor(nombre, precio) {
        this.#nombre = nombre;
        this.#precio = precio;
    }
    
    // Getter para nombre
    get nombre() {
        return this.#nombre;
    }
    
    // Setter para nombre
    set nombre(nuevoNombre) {
        if (nuevoNombre.trim() === "") {
            throw new Error("El nombre no puede estar vacío");
        }
        this.#nombre = nuevoNombre;
    }
    
    // Getter para precio
    get precio() {
        return this.#precio;
    }
    
    // Setter para precio
    set precio(nuevoPrecio) {
        if (nuevoPrecio < 0) {
            throw new Error("El precio no puede ser negativo");
        }
        this.#precio = nuevoPrecio;
    }
    
    // Getter para descuento
    get descuento() {
        return this.#descuento;
    }
    
    // Setter para descuento
    set descuento(nuevoDescuento) {
        if (nuevoDescuento < 0 || nuevoDescuento > 100) {
            throw new Error("El descuento debe estar entre 0 y 100");
        }
        this.#descuento = nuevoDescuento;
    }
    
    // Getter calculado
    get precioFinal() {
        return this.#precio * (1 - this.#descuento / 100);
    }
}










