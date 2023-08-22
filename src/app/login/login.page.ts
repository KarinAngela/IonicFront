import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private navCtrl: NavController) {}

  login() {
    // Aqui você pode adicionar a lógica de autenticação
    // Verifique se as credenciais são válidas e navegue para a próxima página
    if (this.username === 'usuario' && this.password === 'senha') {
      this.navCtrl.navigateForward('/home');
    } else {
      // Tratar erro de autenticação
      console.log('Credenciais inválidas');
    }
  }
}

