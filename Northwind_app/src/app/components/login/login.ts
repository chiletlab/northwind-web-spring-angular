import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  email: string = '';
  password: string = '';
  constructor(private http: HttpClient, private router: Router) {}

  login() {
    const body = {
      email: this.email,
      password: this.password,
    };

    console.log('BODY ENVIADO:', body);

    this.http.post<any>('http://localhost:9090/api/empleado/login', body).subscribe({
      next: (res) => {
        console.log('LOGIN OK', res);
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error(err);
        alert('Email o contraseña incorrectos');
      },
    });
  }
}
