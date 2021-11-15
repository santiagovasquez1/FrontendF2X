import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RecaudoVehiculo } from 'src/app/models/recaudoVehiculo';
import { RecaudoVehiculosService } from 'src/app/services/recaudo-vehiculos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recaudo-vehiculos',
  templateUrl: './recaudo-vehiculos.component.html',
  styles: [
  ]
})
export class RecaudoVehiculosComponent implements OnInit {
  public displayedColumns = ['id', 'estacion', 'sentido', 'hora', 'categoria', 'valorTabulado'];
  public mostrarTabla: boolean = false;
  public recaudosVehiculos: MatTableDataSource<RecaudoVehiculo>

  constructor(private recaudoVehiculosService: RecaudoVehiculosService) {
    this.recaudosVehiculos = new MatTableDataSource<RecaudoVehiculo>();
  }

  ngOnInit(): void {
  }

  public getDate(event: any): void {
    this.recaudoVehiculos(event);
  }

  private recaudoVehiculos(date: string): void {
    this.recaudoVehiculosService.recaudoVehiculos(date).subscribe(result => {
      if (result) {
        this.recaudosVehiculos.data = result;
        this.mostrarTabla = true;
      } else {
        this.mostrarTabla = false;
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No hay datos para mostrar',
        });
      }
    }, error => {
      this.mostrarTabla = false;
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo invocar el servicio de recaudo de vehículos'
      });
    });
  }
}
