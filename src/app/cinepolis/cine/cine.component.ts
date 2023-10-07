import { Component } from '@angular/core';

@Component({
  selector: 'app-cine',
  templateUrl: './cine.component.html',
  styleUrls: ['./cine.component.css']
})
export class CineComponent {
  nombre:string='';
  numcomp:number=0;
  num:number=0;
  resultado:number=0;
  opcion:number=0;
  aviso:string='';
  total:string='';
  calcular():void{

    if(this.num>(7*this.numcomp)){
      this.aviso = this.nombre + " no puedes comprar mas de 7 boletos por comprador" ;
      this.resultado=0;
    }
    else{
      this.aviso = "" ;
      this.resultado=0;
      if(this.opcion==1){
        if (this.num== 1 || this.num==2)
        this.resultado= this.num * 12;
        else if (this.num== 3 || this.num==4 || this.num==5){
          this.resultado= this.num * 12;
          this.resultado= this.resultado*0.9;
        }
        else if (this.num>=6){
          this.resultado= this.num * 12;
          this.resultado= this.resultado*0.85;
        }
        this.resultado = this.resultado * 0.9;
      }
      if(this.opcion==2){
        if (this.num== 1 || this.num==2)
        this.resultado= this.num * 12;
        else if (this.num== 3 || this.num==4 || this.num==5){
          this.resultado= this.num * 12;
          this.resultado= this.resultado*0.9;
        }
        else if (this.num>=6){
          this.resultado= this.num * 12;
          this.resultado= this.resultado*0.85;
        }
      }
    }
    this.total=this.nombre + " tu total a pagar es de " + this.resultado;
  }
}
