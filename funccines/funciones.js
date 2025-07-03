//  let n1=parseInt(prompt("diga el numero n1"));
//  let n2=parseInt(prompt("diga el numero n2"));
//  let n3=parseInt(prompt("diga el numero 3"));
//  let mayor=0;

//  function valorN(n1,n2,n3){
//     return Math.max(n1,n2,n3)
//  }
//  mayor=valorN(n1,n2,n3)
// console.log("valor mayor",mayor)


// //recibe el nombre y la edad de dos personas y recibe la mas joven
// let nombre1 = prompt("Nombre de la persona 1:");
// let edad1 = parseInt(prompt("Edad de la persona 1:"));

// let nombre2 = prompt("Nombre de la persona 2:");
// let edad2 = parseInt(prompt("Edad de la persona 2:"));

// function mostrarMasJoven(nombre1, edad1, nombre2, edad2) {
//     if (edad1 < edad2) {
//         console.log(`La persona más joven es ${nombre1} con ${edad1} años.`);
//     } else if (edad2 < edad1) {
//         console.log(`La persona más joven es ${nombre2} con ${edad2} años.`);
//     } else {
//         console.log(`Ambos tienen la misma edad: ${edad1} años.`);
//     }
// }

// mostrarMasJoven(nombre1, edad1, nombre2, edad2);
// function filtrarMultiplosDeTres(a=1,b=100) {
//   let num = [];
//   let mul = [];
//   for(i=a;i < b;i++){
//     num.push(i); 
//   }
//   console.log(num)
//   num.filter((x) =>{
//     if(x % 3===0) mul.push(x)
//   });
//   console.log(mul)

// }
// const resultado = filtrarMultiplosDeTres();

// function getRandomArbitrary(){
//   let num = Math.floor(Math.random() * (1000 -1)+1);
//   let mitad = num / 2;
//   let mul = num * 2;
//   let raiz = Math.sqrt(num);
//   console.log(`mitad ${mitad} mul ${mul} raiz ${raiz}`)
 
// }
// getRandomArbitrary();



// function te(texto){
//     let new1=texto.split('');
//     console.log(new1)

// }
// te('hola bro');



// function objetos(){
//     const persona = [
//         {
//          nombre:"luis",
//          edad :10,
//          apellido:"lopez",
//         },
//          {
//          nombre:"luis",
//          edad :28,
//          apellido:"lopez",
//         },
//          {
//          nombre:"luis",
//          edad :13,
//          apellido:"lopez",
//         },
//          {
//          nombre:"luis",
//          edad :58,
//          apellido:"lopez",
//         },
//          {
//          nombre:"luis",
//          edad :19,
//          apellido:"lopez",
//         },
//     ];
//     console.log(persona);
//     console.log("persomas mayores de edad");
//     persona.filter((el)=>{
//         if(el.edad >=18) 
//         console.log(`${el.edad} ${el.nombre}`)
//     });
// }
// objetos()

console.log('==============================')

// Crea una función flecha que devuelva el triple de un número.
// Entrada: 4 → Salida esperada: 12
const mul=x=>x*3;
console.log(mul(4))

// Crea una función flecha que determine si un número es negativo.
// Entrada: -3 → Salida: true
// Entrada: 5 → Salida: false
const num=x=>x<0;
console.log(num(-3,':true'));
console.log(num(5,':false'));

// Crea una función flecha que tome una palabra y devuelva cuántas letras tiene.
// Entrada: "Hola" → Salida: 4
const contador = palabra => palabra.lengtha;
console.log(contador('hola'));

// Crea una función flecha que reciba dos nombres y los una con un espacio.
// Entrada: "Ana", "Pérez" → Salida: "Ana Pérez"
const con=(n1,n2)=>`${n1} ${n2}`;

console.log(con("Ana", "Pérez"));
console.log(con("mateo", "Pérez"));

// Crea una función flecha que reciba un array de números y devuelva los que sean pares.
// Entrada: [1, 2, 3, 4, 5, 6] → Salida: [2, 4, 6]
const arr =([1,2,3,4,5,6]);
let numero = arr.filter(n=>n % 2===0)
console.log(numero)

// Crea una función flecha que reciba un array de palabras y devuelva las que tengan más de 5 letras.
// Entrada: ["sol", "computadora", "luz", "pantalla"] → Salida: ["computadora", "pantalla"]

const fun =['hola','comoestas','bro','juansapo']
let letras = fun.filter(n=>n.length>5);
console.log(letras)

// Crea una función flecha que reciba un número y devuelva true si es múltiplo de 5.

const esMultiploDeCinco = num => num % 5 === 0;
console.log(esMultiploDeCinco(10));  // true
console.log(esMultiploDeCinco(7));   // false
console.log(esMultiploDeCinco(0));   // true

// Crea una función flecha que tome un número y devuelva su raíz cuadrada.

const raiz=num=>Math.sqrt(num);
console.log(raiz(110));
// rea una función flecha que reciba un texto y lo devuelva en mayúsculas.
const ma=(texto=>texto.toUpperCase(texto));
console.log(ma('gracias dios'));

















