// Pedir las longitudes de los vectores
let n = parseInt(prompt("Longitud del primer vector (n): "));
let m = parseInt(prompt("Longitud del segundo vector (m): "));

// Crear los vectores vacíos
let vector1 = [];
let vector2 = [];

// Llenar el primer vector
for (let i = 0; i < n; i++) {
    vector1.push(parseInt(prompt("Valor para el primer vector: ")));
}

// Llenar el segundo vector
for (let i = 0; i < m; i++) {
    vector2.push(parseInt(prompt("Valor para el segundo vector: ")));
}

// Calcular las sumas
let suma1 = 0;
for (let i = 0; i < n; i++) {
    suma1 += vector1[i];
}

let suma2 = 0;
for (let i = 0; i < m; i++) {
    suma2 += vector2[i];
}

// Crear el tercer vector
let vector3 = [];
vector3[0] = suma1 + suma2; // Suma total
vector3[1] = suma1 * suma2; // Producto de las sumas

// Mostrar resultados
console.log("Primer vector:", vector1);
console.log("Segundo vector:", vector2);
console.log("Tercer vector:", vector3);