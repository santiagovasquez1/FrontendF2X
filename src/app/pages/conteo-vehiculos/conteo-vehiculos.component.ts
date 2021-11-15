import { ConteoVehiculosService } from './../../services/conteo-vehiculos.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ConteoVehiculo } from 'src/app/models/conteoVehiculo';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-conteo-vehiculos',
  templateUrl: './conteo-vehiculos.component.html',
  styles: [
  ]
})
export class ConteoVehiculosComponent implements OnInit {
  public displayedColumns = ['id', 'estacion','sentido','hora', 'categoria','cantidad'];
  public conteosVehiculos: MatTableDataSource<ConteoVehiculo>
  public mostrarTabla: boolean = false;

  constructor(private conteoVehiculosService: ConteoVehiculosService) {
    this.conteosVehiculos = new MatTableDataSource<ConteoVehiculo>();
  }

  ngOnInit(): void {
  }

  public getDate(event: any): void {
    this.conteoVehiculos(event);
  }

  conteoVehiculos(date: string) {
    this.conteoVehiculosService.conteoVehiculos(date).subscribe(result => {
      if (result) {
        this.conteosVehiculos.data = result;
        this.mostrarTabla = true;
      } else {
        this.mostrarTabla = false;
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No se encontraron resultados para la fecha seleccionada',
        });
      }
    }, error => {
      this.mostrarTabla = false;
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo invocar el servicio de conteo de vehículos'
      });
    });
  }

}
