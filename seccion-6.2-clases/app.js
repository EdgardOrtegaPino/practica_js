

/*let carro1 = {
       marca: 'Toyota',
       tipo: 'Sedan',
       puertas: 3
};
*/

class Carro {

       constructor(marca1, tipo1, puertas){

              this.marca = marca1;
              this.tipo = tipo1;
              this.puertas = puertas;
              this.CreacionEn = 'hoy';
              this.encendido = false;
              this.gasolina = 100;

       }

       encenderCarro(){

              if (this.encendido){
                     console.error('el carro ya estaba encendido... se daño el motor')
              }else {
                     this.encendido = true;
                     console.log(' el carro esta encendido')
              }
              return this;


       }
       realizarViaje(consumo){

                     if(!this.encendido) return console.log('carro apagado');

                     if (consumo >this.gasolina) return console.log('no puede realizar el viaje: Gasolina '+ this.gasolina);

                            this.gasolina = this.gasolina - consumo;
                            return 'le queda espacio ' + this.gasolina;
                     


       }
} // fin clase

let carro = new Carro ('Mazda','Sedan','2')

console.log(carro);