import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { LoginForm } from '../models/loginForm';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private route: Router) { }

  get token(): string | null {
    return localStorage.getItem('token');
  }

  get headers(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token ? this.token : ''
    });
  }

  login(loginForm: LoginForm): Observable<any> {
    const url = `${environment.base_url}/Login`;
    return this.http.post(url, loginForm, { headers: this.headers })
      .pipe(
        tap((response: any) => {
          localStorage.setItem('token', response.token.token);
        })
      );
  }

  validarToken(): boolean {
    if(this.token){
      return true;
    }else{
      this.route.navigate(['/login']);
      return false;
    }
  }
}
