function buscar(dni,fn){
    setTimeout(()=>{
        fn('hola mateo');

    },2000);

}
buscar('213213',(nombre)=> {
    console.log(nombre);

});