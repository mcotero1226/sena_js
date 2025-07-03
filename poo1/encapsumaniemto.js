class Persona {
    #edad;
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.#edad = edad; // "_" indica que no se debe tocar directamente
    }

    getEdad() {
        return this.#edad;
    }

    setEdad(nuevaEdad) {
        if (nuevaEdad > 0) {
            this.#edad = nuevaEdad;
        } else {
            console.log("Edad no válida");
        }
    }
}

const p1 = new Persona("Lucía", 25);
console.log(p1.getEdad());  // 25
p1.setEdad(-10);            // Edad no válida
console.log(p1.getEdad());  // 25


class Cuenta {
  #saldo;

  constructor(nombre) {
    this.nombre = nombre;
    this.#saldo = 0;
  }

  depositar(cantidad) {
    if (cantidad > 0) {
      this.#saldo += cantidad;
    }
  }

  retirar(cantidad) {
    if (cantidad <= this.#saldo) {
      this.#saldo -= cantidad;
    } else {
      console.log("Fondos insuficientes");
    }
  }

  mostrarSaldo() {
    console.log(`${this.nombre} tiene  ${this.#saldo}`);
  }
}

const c = new Cuenta("Ana");
c.depositar(100);
c.retirar(30);
c.mostrarSaldo(); // Ana tiene $70

 class libro {
    #precio
    constructor(titulo,precio){
        this.titulo=titulo;
        this.#precio=precio;
    }
    precio(){
       return this.#precio

    }
    setprecio(nuevoPrecio){
        if(nuevoPrecio > 0){
            this.#precio = nuevoPrecio;

        }


    }
    mostrarinfo(){
        console.log(`${this.titulo} y el precio ${this.#precio}`)
    }
}
const Nulibro = new libro("alo",3500);
console.log(Nulibro.precio());
console.log(Nulibro.setprecio());
Nulibro.setprecio(4500);
console.log(Nulibro.mostrarinfo());
console.log("===============================================================");

class Usuario {
  #contraseña;

  constructor(usuario, contraseña) {
    this.usuario = usuario;
    this.#contraseña = contraseña;
  }

  verificarContraseña(intento) {
    return this.#contraseña === intento;
  }

  cambiarContraseña(nueva) {
    this.#contraseña = nueva;
  }
}

const u = new Usuario("maria", "abc123");
console.log(u.verificarContraseña("abc123")); // true
console.log(u.verificarContraseña("123"));    // false
u.cambiarContraseña("nuevaClave");
console.log(u.verificarContraseña("nuevaClave")); // true
