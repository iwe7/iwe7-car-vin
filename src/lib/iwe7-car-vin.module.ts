import { CommonModule } from '@angular/common';
import { CarVinComponent } from './car-vin/car-vin';
import { NgModule } from '@angular/core';
import { KeyboardStringModule } from 'iwe7-keyboard';

@NgModule({
  imports: [
    CommonModule,
    KeyboardStringModule
  ],
  declarations: [
    CarVinComponent
  ],
  exports: [
    CarVinComponent
  ]
})
export class Iwe7CarVinModule { }
