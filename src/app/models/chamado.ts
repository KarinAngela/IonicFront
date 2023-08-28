export class Chamado {
  id?: number;
  fotoProblema: string;
  descricaoProblema: string;
  prioridade: string;
  tituloChamado: string;
  statusChamado: string;
  lat: number;
  lng: number;
  idUsuario?: number;

  constructor(fotoProblema: string, descricaoProblema: string, prioridade: string, tituloChamado: string, statusChamado: string, lat: number, lng: number) {
    this.fotoProblema = fotoProblema;
    this.descricaoProblema = descricaoProblema;
    this.prioridade = prioridade;
    this.tituloChamado = tituloChamado;
    this.statusChamado = statusChamado;
    this.lat = lat;
    this.lng = lng;
  }
}
