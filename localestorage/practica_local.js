window.onload = function() {

    const btn = document.createElement('button');
    btn.textContent = 'Guardar nombre';
    document.body.appendChild(btn);

    btn.addEventListener('click', function() {
        // Solicita el nombre al usuario
        const nombre = prompt('Digite su nombre:');
        // Solicita el primer apellido al usuario
        
        // Guarda el nombre y apellido en localStorage
        localStorage.setItem('nombre', nombre);
        

        if (nombre.toLowerCase() === 'mateo') {
            const apellido1 = prompt('Digite su primer apellido:');
            document.body.textContent = 'Bienvenido, ' + nombre + ' ' + apellido1;
            localStorage.setItem('apellido', apellido1);
        } else {
            document.body.textContent = 'Tú no eres Mateo, acceso denegado.';
        }
    });
}

//  Nivel 1: Básico
// Guardar y mostrar nombre
// Crea un input y un botón.
// Al hacer clic, guarda el nombre en localStorage.
// Muestra "Hola, [nombre]" en la página.
// Si el nombre ya está guardado, muéstralo automáticamente al cargar la página.
// Contador de visitas
// Usa localStorage para contar cuántas veces el usuario ha entrado a la página.
// Muestra el número de visitas en pantalla
// Guardar y mostrar nombre y contador de visitas

document.addEventListener('DOMContentLoaded', function() {
    // Crear input y botón
    const input = document.createElement('input');
    input.type = 'text';// Definimos el tipo de input como texto
    input.placeholder = 'Ingresa tu nombre';// Agregamos un placeholder para que el usuario sepa qué ingresar
    // Esto crea un campo de texto donde el usuario puede escribir su nombre
    const button = document.createElement('button');
    button.textContent = 'Guardar nombre';
    const saludo = document.createElement('div');
    //estmos creando un div para mostrar el saludo en la pagin  a
    //lo mismo con el contador de visitas
    const visitas = document.createElement('div');
    document.body.append(input, button, saludo, visitas);
    //Esto agrega múltiples elementos al final del <body>

    // Mostrar nombre si ya está guardado
    const nombreGuardado = localStorage.getItem('nombre');
    if (nombreGuardado) {
        saludo.textContent = `Hola, ${nombreGuardado}`;
    }

    // Al hacer clic, guarda el nombre en localStorage.
    button.onclick = function() {
        localStorage.setItem('nombre', input.value);//el valor se agrega desde un   // input entoces se usará input.value
        saludo.textContent = `Hola, ${input.value}`;
    };

    // Contador de visitas
    let contador = parseInt(localStorage.getItem('visitas')) || 0;
    contador++;// Incrementa el contador
    localStorage.setItem('visitas', contador);// Guarda el contador actualizado
    // Muestra el número de visitas en pantalla

    visitas.textContent = `Número de visitas: ${contador}`;
});




