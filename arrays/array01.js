// Realizar un programa que llene 2 vectores string de long n y m respectivamente
// y llene un tercer vector con la unión de ambos vectores


let n = parseInt(prompt('Digite la longitud del primer vector (n): '));
let m = parseInt(prompt('Digite la longitud del segundo vector (m): '));

let vector1 = [];
let vector2 = [];

for (let i = 0; i < n; i++) {
    vector1.push(prompt("Elemento para el primer vector: "));
}

for (let i = 0; i < m; i++) {
    vector2.push(prompt("Elemento para el segundo vector: "));
}

let vector3 = [];
for (let i = 0; i < n; i++) {
    vector3.push(vector1[i]);
}
for (let i = 0; i < m; i++) {
    vector3.push(vector2[i]);
}


console.log("Primer vector:", vector1);
console.log("Segundo vector:", vector2);
console.log("Tercer vector (unión):", vector3);


