import { Component } from '@angular/core';

@Component({
  selector: 'app-temperaturas',
  templateUrl: './temperaturas.component.html',
  styleUrls: ['./temperaturas.component.css']
})
export class TemperaturasComponent {

  temperatura='';
  resultado:number=0;
  opcion:number=0;

  conversion(){
    if(this.opcion == 1) {
      this.resultado=(parseInt(this.temperatura)-32)*5/9;
    }
    if(this.opcion == 2) {
      this.resultado=(parseInt(this.temperatura)* 9/5)+32;
    }
  }
}
