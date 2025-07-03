let n = parseInt(prompt("¿Cuántos usuarios desea ingresar?"));
let total_graduados = 0;
let totalVeces = 0;

for (let i = 0; i < n; i++) {
    let nombre = prompt("¿Cuál es tu nombre?").toUpperCase();
    let ca_estudiadas = parseInt(prompt(`Cantidad de carreras universitarias que ha terminado exitosamente, ${nombre}`));
    let sumaUdeA = 0;
    let sumaCarreras_cortas = 0;
    let contador_cortas = 0;
    for (let j = 0; j < ca_estudiadas; j++) {
        let años = parseInt(prompt(`¿Cuántos años tardó en graduarse?`)); 
        if (años >= 6) {
            let universidad = prompt(`Nombre de la universidad:`).toUpperCase();
            let compañeros = parseInt(prompt(`${nombre}, ¿con cuántos compañeros te graduaste?`));
            total_graduados += compañeros;
            totalVeces++;
            if (universidad === "UdeA") {
                sumaUdeA += años;
            }
        } else {
            sumaCarreras_cortas += años;
            contador_cortas++;
        }
    }
    let promedio = contador_cortas > 0 ? (sumaCarreras_cortas / contador_cortas) : 0;

    console.log(`Usuario ${nombre}:`);
    console.log(`Promedio de años en carreras con menos de 6 años: ${promedio}`);
    console.log(`Suma de años en carreras en la UdeA: ${sumaUdeA}`);
}
console.log(`Suma de estudiantes graduados en promociones de más de 6 años: ${total_graduados}`);
console.log(`Cantidad de veces que los usuarios tardaron 6 años o más en graduarse: ${totalVeces}`);
