function obtenerdatos(callback){
    console.log("iniciando solicitud de datos");
    setTimeout(()=>{
        const datos ={usuario:"juan",id:123};
        callback(datos);
    },2000);
    console.log("solicitukd iniciada ...");

}
function pro(datos){
    console.log("datos recibidos:",datos);
}
obtenerdatos(pro);