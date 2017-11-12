import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {SchoolService} from '../../../school.service';
import {ShareddataService} from '../../../services/shareddata.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-school-details',
  templateUrl: './school-details.component.html',
  styleUrls: ['./school-details.component.css']
  // encapsulation: ViewEncapsulation.None
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

  private subscription = new Subscription();
  // private schoolSelectedID: string;

  constructor(private router: Router,
              private schoolService: SchoolService,
              private sharedDataService: ShareddataService) { }

  ngOnInit() {
    const s = this.sharedDataService.getSchoolID().subscribe(
      res => {
        console.log("cosa",this.sharedDataService);
        console.log("res",res);
        this.schoolSelectedID = res;
        //this.getSchoolDetailedInformation(this.schoolSelectedID);
        this.getSchoolDetailedInformation(this.schoolSelectedID);
      });
    this.subscription.add(s);
  }

  toggleSchoolDetails() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle('push-right-school-details');
    console.log('procurando a informaçao detalhada da escola escolhida');
  }

  // Invoked from layout.component.ts or from geolocation.component.ts
  getSchoolDetailedInformation(schoolID: string) {
    // this.router.navigate([this.URL_ROOT + 'school/school-details/' + schoolID]);
    // this.schoolObject = schoolID;
    console.log("id escuela",schoolID);
    this.schoolService.showSchool(schoolID).then((res) => {
      this.schoolSelected = res;
      this.CODESC = this.schoolSelected.CODESC;
      this.NO_ENTIDAD = this.schoolSelected.NO_ENTIDAD;
      this.NOMEMUN = this.schoolSelected.NOMEMUN;
      this.BAIRRO = this.schoolSelected.BAIRRO;
      this.CEP = this.schoolSelected.CEP;
      this.ENDERECO = this.schoolSelected.ENDERECO;
      this.NUMERO = this.schoolSelected.NUMERO;
      this.DDD = this.schoolSelected.DDD;
      this.TELEFONE = this.schoolSelected.TELEFONE;
      this.NO_REGIAO = this.schoolSelected.NO_REGIAO;
      this.SIGLA = this.schoolSelected.SIGLA;
      this.Dependad = this.schoolSelected.Dependad;
      this.DESC_SITUACAO_FUNCIONAMENTO = this.schoolSelected.DESC_SITUACAO_FUNCIONAMENTO;
      this.ID_LOCALIZACAO = this.schoolSelected.ID_LOCALIZACAO;
      this.ID_LABORATORIO_INFORMATICA = this.schoolSelected.ID_LABORATORIO_INFORMATICA;
      this.ID_QUADRA_ESPORTES_COBERTA = this.schoolSelected.ID_QUADRA_ESPORTES_COBERTA;
      this.ID_QUADRA_ESPORTES_DESCOBERTA = this.schoolSelected.ID_QUADRA_ESPORTES_DESCOBERTA;
      this.ID_BIBLIOTECA = this.schoolSelected.ID_BIBLIOTECA;
      this.LOCATION.LAT = this.schoolSelected.lat;
      this.LOCATION.LON = this.schoolSelected.lon;
      this.LOCATION.CODAP = this.schoolSelected.codap;
      // send lat, lon and codAp of a school selected to geolocation component via observable subject
      this.sharedDataService.sendSchoolLocation(this.LOCATION);
      this.onSchoolLocation.emit(this.LOCATION);
    }, (err) => {
      console.log(err);
    });
  }

}
