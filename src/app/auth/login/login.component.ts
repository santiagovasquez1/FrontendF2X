import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.loginForm.value).subscribe(result => {
      Swal.fire('Login', 'Bienvenido', 'success').then(() => {
        this.router.navigateByUrl('/');
      });
    }, err => {
      Swal.fire('Login', 'Usuario o contraseña incorrecta', 'error');
    });
  }

}
