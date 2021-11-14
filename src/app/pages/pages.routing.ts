import { RecaudoVehiculosComponent } from './recaudo-vehiculos/recaudo-vehiculos.component';
import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConteoVehiculosComponent } from './conteo-vehiculos/conteo-vehiculos.component';
import { AuthGuard } from '../guard/auth.guard';

const routes: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'conteovehiculos',
                component: ConteoVehiculosComponent,
                data: {
                    title: 'Conteo de vehiculos'
                }
            }, {
                path: 'recaudovehiculos',
                component: RecaudoVehiculosComponent,
                data: {
                    title: 'Recaudo de vehiculos'
                }
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }