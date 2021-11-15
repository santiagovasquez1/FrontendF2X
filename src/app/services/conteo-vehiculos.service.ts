import { AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';
import { ConteoVehiculo } from '../models/conteoVehiculo';

@Injectable({
  providedIn: 'root'
})
export class ConteoVehiculosService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  conteoVehiculos(date: string): Observable<ConteoVehiculo[]> {
    const url = `${environment.base_url}/ConteoVehiculos/${date}`;
    return this.http.get(url, { headers: this.authService.headers })
      .pipe(
        map((resp: any) => {
          return resp.conteoVehiculos as ConteoVehiculo[];
        })
      );
  }
}
