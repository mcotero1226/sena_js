let n = parseInt(prompt('Número de exploradores a registrar:'));
let expedicionesEverest = 0;
let sumaMontanasCortas = 0;
let contadorCortas = 0;
let expedicionesMontanasGrandes = 0;
for (let i = 0; i < n; i++) {
    let nombreE = prompt('Nombre del explorador:');
    let cantidadMES = parseInt(prompt('Número de montañas escaladas:'));

    for (let x = 0; x < cantidadMES; x++) {
        let cantidadMetros = parseInt(prompt('Cantidad de metros escalados:'));
        // si la montaña es mayor de 300 entoces:
        if (cantidadMetros >= 300) {
            let nombreMont = prompt('Nombre de la montaña:');
            let diasEnEscalar = parseInt(prompt('Cantidad de días en escalar:'));
            let acompanantes = parseInt(prompt('¿Cuántas personas te acompañaron?:'));
            //suma de dias a la montaña grante
            expedicionesMontanasGrandes++;

            if (nombreMont.toLowerCase() === "everest") {
                //suma especial de los días//
                expedicionesEverest++;
            }

        } else {
            let diasEnEscalar = parseInt(prompt('Cantidad de días en escalar:'));
            // acumulador// 
            sumaMontanasCortas += diasEnEscalar;
            //contador en 1//
            contadorCortas++;
        }
    }
}

let promedioDiasCortas = contadorCortas > 0 ? (sumaMontanasCortas / contadorCortas) : 0;

console.log(`Total de expediciones a montañas grandes: ${expedicionesMontanasGrandes}`);
console.log(`Total de expediciones a montañas llamadas Everest: ${expedicionesEverest}`);
console.log(`Promedio de días en montañas cortas : ${promedioDiasCortas.toFixed(2)}`);
