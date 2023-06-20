import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(private router: Router) {}

  login() {
    // Verifica os dados de login
    if (this.username === 'DWU' && this.password === 'DWU2023') {
      // Redireciona para a tela de formulário
      this.router.navigate(['/formulario']);
    } else {
      // Exibe mensagem de erro de login inválido
      this.loginError = true;
    }
  }
}

