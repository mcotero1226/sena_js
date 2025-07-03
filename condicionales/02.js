//Hacer un programa que pida dos números enteros y escriba qué números son pares y 
//cuáles impares desde el primero hasta el 
//segundo. (operador módulo en javaScript es %)
let n1=parseInt(prompt('Numero 1'));
let n2=parseInt(prompt('Numero 2'));


for (let i = n1; i <= n2; i++) {
        if (i % 2 === 0) {
            console.log(`${i} es número par`);
        } else {
            console.log(`${i} es número impar`);
        }
    }
