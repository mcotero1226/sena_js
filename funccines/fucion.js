const vector = [];

function filLog(longitudParam){
    for(let i=0;i<longitudParam;i++) {
    let respuesta = prompt('Ingrese un valor');
    //el isnan se usa para determinar si un valor no es un número
    const isNotNumber = isNaN(respuesta);
    if (isNotNumber) {
        vector.push(respuesta)
    } else {
        vector.push(parseInt(respuesta)) 
    }
    }

    console.log(vector)
}

let longitud = parseInt(prompt('diaga cual es la longitud'));
filLog(longitud)
