import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConteoVehiculosComponent } from './conteo-vehiculos/conteo-vehiculos.component';
import { RecaudoVehiculosComponent } from './recaudo-vehiculos/recaudo-vehiculos.component';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [
    ConteoVehiculosComponent,
    RecaudoVehiculosComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ConteoVehiculosComponent,
    RecaudoVehiculosComponent,
    PagesComponent
  ]
})
export class PagesModule { }
