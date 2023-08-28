import {Component} from '@angular/core';
import {NavController} from '@ionic/angular';
import {CookieService} from "../services/cookie/cookie-service.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';
  isToastOpen: boolean = false;

  constructor(private navCtrl: NavController, private cookieService: CookieService) {
  }

  login() {
    const loginUrl = "http://localhost:8080/auth/login"
    fetch(loginUrl, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({email: this.email, senha: this.password}),
    })
      .then(async res => {
        if (res.status !== 200) {
          this.openToast(true);
          return;
        }

        if (res.body != null) {
          this.cookieService.setCookie("access-token", await res.text(), 1)
          this.navCtrl.navigateForward("/chamado")
        }
      })
      .catch(() => this.openToast(true))
  }

  openToast(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }
}

