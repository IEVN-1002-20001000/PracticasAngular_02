import { Component } from '@angular/core';

@Component({
  selector: 'app-cine',
  templateUrl: './cine.component.html',
  styleUrls: ['./cine.component.css']
})
export class CineComponent {
  costoboleto:number = 12;

  nombre:string = '';
  compradores:number = 0;
  tarjeta:string = 'no';
  boletos:number = 0;

  total:number = 0;

  mensaje:string = '';

  calcular():void {
    this.mensaje = '';
    this.total = 0;


    if(this.boletos/this.compradores > 7){
      this.mensaje = 'no se pueden comprar mas de 7 boletos por persona'
    }else if(this.boletos > 2){
      if(this.boletos > 5){
        this.total = (this.costoboleto*this.boletos)*.85;
        this.mensaje = 'Se aplico un 15% de descuento a su compra';
      }else{
        this.total = (this.costoboleto*this.boletos)*.9;
        this.mensaje = 'Se aplico un 10% de descuento a su compra';
      }
    }else{
      this.total = this.costoboleto*this.boletos;
    }

    console.log(this.tarjeta);

    if(this.tarjeta == 'si'){
      this.total = this.total * .9;
      this.mensaje += 'Se le aplico un 10% de descuento más por su tarjeta CINECO'
    }
  }

}

