class vehiculo {
    constructor(velMax){
        this.velMax=velMax

    }


}
class bicicletas extends vehiculo{
    constructor(velMax,tipo,estado,tiempoUso,cantidad){
        super(velMax);
        this.tipo=tipo;
        this.estado=estado;
        this.tiempoUso=tiempoUso;
        this.cantidad=cantidad
    }
     alquier(minutos){
        this.tiempoUso+=minutos;
        return`el tiempo de uso es ${this.tiempoUso}`;
    }
    verEstado(){
       return ` Estado actual: ${this.estado}`;

    }
    mantenimiento(){
        if(this.tiempoUso>500){
          return " Esta bicicleta requiere mantenimiento.";
            

        }else{
            return `todo en orden`
        }
    }
   
}

const lisbicicletas=[]
const canbicicletas=parseInt(prompt('N cantidad de bicicletas'));

for(let i=0;i<canbicicletas;i++){
    const tipo=prompt('diga el tipo de bicicleta ');
    const estado=prompt('tipo de esatado de la bicicleta');
    const tiempoUso=parseInt(prompt('diga el tiempo de uso '))
    const velMax=parseInt(prompt('diga la velocidad maxinma '))

    const bicicleta1=new bicicletas(tipo,estado,tiempoUso,velMax,1)
    lisbicicletas.push(bicicleta1);

}
lisbicicletas.forEach((bicicletas) => {
  console.log(bicicletas.alquier());
  console.log(bicicletas.verEstado());
  console.log(bicicletas.mantenimiento());
 
});

    