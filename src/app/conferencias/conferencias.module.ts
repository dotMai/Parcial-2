import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConferenciasComponent } from './conferencias.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ConferenciasComponent],
  exports: [ConferenciasComponent]
})
export class ConferenciasModule { }
