import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CookieService} from "../services/cookie/cookie-service.service";
import {NavController} from "@ionic/angular";
import {DTOChamado} from "../dto/dto-chamado";

@Component({
  selector: 'app-dados-chamado',
  templateUrl: './dados-chamado.page.html',
  styleUrls: ['./dados-chamado.page.scss'],
})
export class DadosChamadoPage implements OnInit {
  chamado: DTOChamado = {
    descricaoProblema: "",
    fotoProblema: "",
    lat: 0,
    lng: 0,
    prioridade: "",
    statusChamado: "PENDENTE",
    tituloChamado: "",
  };
  requestMethod: string = 'POST';
  requestUrl: string = 'http://localhost:8080/chamados'


  constructor(public router: Router, public navController: NavController, private cookieService: CookieService) {

  }

  ngOnInit() {
    if (this.router.getCurrentNavigation()?.extras.state) {
      const routerState = this.router.getCurrentNavigation()?.extras.state;
      if (routerState) {
        this.chamado = routerState['chamado'];
        this.requestMethod = 'PUT';
        this.requestUrl = `http://localhost:8080/chamados/${routerState['chamado'].id}`
      }
    }
  }

  submitForm() {
    fetch(this.requestUrl, {
      method: this.requestMethod,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.cookieService.getCookie('access-token')
      },
      body: JSON.stringify(this.chamado)
    })
      .then(res => {
        if (res.status !== 200) {
          // TOAST
        } else {
          this.navController.navigateForward('/chamado');
        }
      })
      .catch(err => console.log(err));
  }
}
