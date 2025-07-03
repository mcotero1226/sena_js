let promesa1=new Promise ((resolve,reject)=>{
    setTimeout(()=>resolve(1),1000);
});
promesa1.the((valor)=>{
    console.log(valor);
    return valor*2;

})
.then((valor)=>{
    console.log(valor);
    return valor*2;

})
.then((valor)=>{
    console.log(valor);
    

})