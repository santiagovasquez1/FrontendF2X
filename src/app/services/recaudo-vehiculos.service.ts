import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RecaudoVehiculo } from '../models/recaudoVehiculo';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RecaudoVehiculosService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  recaudoVehiculos(date: string): Observable<RecaudoVehiculo[]> {
    const url = `${environment.base_url}/RecaudosVehiculos/${date}`;
    return this.http.get(url, { headers: this.authService.headers })
      .pipe(
        map((resp: any) => {
          return resp.recaudosVehiculos as RecaudoVehiculo[];
        })
      );
  }
}
