import { Component, OnInit } from '@angular/core';
import {Chamado} from "../models/chamado";
import {CookieService} from "../services/cookie/cookie-service.service";
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-chamado',
  templateUrl: './chamado.page.html',
  styleUrls: ['./chamado.page.scss'],
})
export class ChamadoPage implements OnInit {
  chamadoList?: Array<Chamado>;
  isToastOpen: boolean = false;

  constructor(public navController: NavController, private cookieService: CookieService) {}

  ngOnInit() {
    this.fetchChamados();
  }

  fetchChamados() {
    const chamadosUrl = "http://localhost:8080/chamados"
    fetch(chamadosUrl, {
      method: "GET",
      headers: {"Authorization": "Bearer " + this.cookieService.getCookie("access-token")}
    })
      .then(async res => {
        if (res.status !== 200) {
          this.openToast(true);
          return;
        }

        this.chamadoList = await res.json();
      })
      .catch(() => this.openToast(true));
  }

  insertChamado() {
    this.navController.navigateForward('/dados-chamado');
  }

  openToast(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  openChamadoDetail($event: Event, chamado: Chamado) {
    this.navController.navigateForward("/dados-chamado", {state: {chamado: chamado}});
  }

  deleteChamado(chamado: Chamado) {
    const url = `http://localhost:8080/chamados/${chamado.id}`
    fetch(url, {
      method: 'DELETE',
      headers: {'Authorization': 'Bearer ' + this.cookieService.getCookie('access-token')}
    })
      .then(res => {
        if (res.status !== 200) {
          console.log(res);
          return;
        }


      })
      .catch(err => console.log(err));
  }
}
