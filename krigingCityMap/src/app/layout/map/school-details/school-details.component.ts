import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-school-details',
  templateUrl: './school-details.component.html',
  styleUrls: ['./school-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SchoolDetailsComponent implements OnInit {
  @Output() onSchoolLocation = new EventEmitter<any>();
  schoolSelectedID: string;
  schoolSelected: any;
  // Geral Information about a school
  CODESC = '';
  NO_ENTIDAD = '';
  NOMEMUN = '';
  BAIRRO = '';
  CEP = '';
  ENDERECO = '';
  NUMERO = '';
  DDD = '';
  TELEFONE = '';
  NO_REGIAO = '';
  SIGLA= '';
  Dependad = '';
  DESC_SITUACAO_FUNCIONAMENTO = '';
  ID_LOCALIZACAO = '';
  ID_LABORATORIO_INFORMATICA = '';
  ID_QUADRA_ESPORTES_COBERTA = '';
  ID_QUADRA_ESPORTES_DESCOBERTA = '';
  ID_BIBLIOTECA = '';

  LOCATION = {
    LAT: 0,
    LON: 0,
    CODAP: ''
  };

  constructor() { }

  ngOnInit() {
  }

  toggleSchoolDetails() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle('push-right-school-details');
    console.log('procurando a informaçao detalhada da escola escolhida');
  }

}
