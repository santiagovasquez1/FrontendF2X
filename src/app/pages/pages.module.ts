import { AngularMaterialModule } from './../angular-material.module';
import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConteoVehiculosComponent } from './conteo-vehiculos/conteo-vehiculos.component';
import { RecaudoVehiculosComponent } from './recaudo-vehiculos/recaudo-vehiculos.component';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    ConteoVehiculosComponent,
    RecaudoVehiculosComponent,
    PagesComponent,
    HomeComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    AngularMaterialModule
  ],
  exports: [
    ConteoVehiculosComponent,
    RecaudoVehiculosComponent,
    PagesComponent,
    HomeComponent,
  ]
})
export class PagesModule { }
