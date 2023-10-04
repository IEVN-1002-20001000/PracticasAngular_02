import { Component } from '@angular/core';

@Component({
  selector: 'app-opera-multi',
  templateUrl: './opera-multi.component.html',
  styleUrls: ['./opera-multi.component.css']
})
export class OperaMultiComponent {
    num= 0;
    multi= 0;
    restMulti: string = '';
    serie= 0;
  
    calcular() {
      this.restMulti = '';
      this.serie = 0;
  
      for (let i = 0; i < this.multi; i++) {
        this.serie += this.num;
        this.restMulti += this.num.toString();  if (i < this.multi - 1) {
          this.restMulti += ' + ';
      }
    }
  }
}
