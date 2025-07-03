
let n = parseInt(prompt('N usuarios'));
for (let j = 0; j < n; j++) {
    let numeroAMultiplicar = parseInt(prompt('Ingrese el número a multiplicar para el usuario'));
    let numeroFinal = parseInt(prompt('Numero final de la multiplicacion'));
    
    for (let i = 0; i <= numeroFinal; i++) {
        console.log(`${numeroAMultiplicar} x ${i} = ${numeroAMultiplicar * i}`);
    }
    console.log("------------------------");
}