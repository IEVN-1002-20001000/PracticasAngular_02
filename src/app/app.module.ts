import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TemperaturasComponent } from './temperaturas/temperaturas.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OperaMultiComponent } from './operaMulti/opera-multi/opera-multi.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material/material.module';
import { CineComponent } from './cinepolis/cine/cine.component';

@NgModule({
  declarations: [
    AppComponent,
    TemperaturasComponent,
    OperaMultiComponent,
    CineComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
