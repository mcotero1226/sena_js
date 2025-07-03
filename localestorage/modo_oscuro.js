
// const cantidad=parseInt(prompt('candidad de carros'));
// for(const i=0;i<cantidad;i++){
//     const carro=prompt('caul estu carro')
//     localStorage.setItem('carro1',carro);
//     const carrop=localStorage.getItem('carro1');
//     if(carrop==='maxda'){
//        const mascarros='posh';
//        localStorage.setItem('carro2',mascarros);
//        localStorage.getItem('mascarros');
    
//     }else{
//        const menos='nada';
//        localStorage.setItem('carro3',menos);
//        localStorage.getItem('menos');
//     }


// }

// Objetivo:
// Crea dos botones:
// 🌓 "Modo oscuro" y 🌞 "Modo claro".
// Cambia el color de fondo de la página y guarda la selección en localStorage.
// Cuando recargues la página, que se mantenga ese tema.

// 🧠 Pista: guarda "oscuro" o "claro" en el localStorage y usa window.onload para aplicarlo.   
window.onload = function() {
    const tema = localStorage.getItem('tema');
    if (tema === 'oscuro') {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
};
// Botones para cambiar el tema
const btnOscuro = document.createElement('button');
btnOscuro.textContent = 'Modo oscuro';
const btnClaro = document.createElement('button');
btnClaro.textContent = 'Modo claro';    
// Añadir los botones al cuerpo del documento
document.body.appendChild(btnOscuro);   
document.body.appendChild(btnClaro);
// Evento para el botón "Modo oscuro"
btnOscuro.addEventListener('click', function() {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    localStorage.setItem('tema', 'oscuro');
});
// Evento para el botón "Modo claro"
btnClaro.addEventListener('click', function() {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    localStorage.setItem('tema', 'claro');
}
);
    

// const color=prompt('dime tu color');
// if(color==='oscuro'){
//     const color1='pero hp'
//     localStorage.setItem('color12',color1);
//     localStorage.getItem('color12');
// }else{
//     const color2='alo bro';
//     localStorage.setItem('caloer2',color2);
//     localStorage.getItem('color2');
// }







