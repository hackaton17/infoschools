import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.markercluster';
import {SchoolService} from '../../school.service';
import {ShareddataService} from '../../services/shareddata.service';
import {Router} from '@angular/router';
import {CompleterData, CompleterItem, CompleterService} from 'ng2-completer';
import {CustomData} from '../../custom.data';
import {Http} from '@angular/http';
import {MapService} from '../../map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
  // encapsulation: ViewEncapsulation.None
})
export class MapComponent implements OnInit {
  schoolSelectedFlag= true;
  centerLat = -23.552133;
  centerLng = -46.6331418;
  schoolsCoordinates: any;
  schoolsCoordinatesObject: any;
  schoolSelectedID: string;

  schoolMarkerIcon = L.icon({
    iconUrl: 'assets/images/marcador_school_default.png',
    iconSize: [40, 40], // size of the icon
    iconAnchor: [20, 40], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -40] // point from which the popup should open relative to the iconAnchor
  });
  selectedSchoolMarkerIcon = L.icon({
    iconUrl: 'assets/images/marcador_school_selected.png',
    iconSize: [60, 65], // size of the icon
    iconAnchor: [30, 65], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -65] // point from which the popup should open relative to the iconAnchor
  });

  neighborhoodRadius = 2000;
  neighboringSchoolsLayer: any;

  LAYER_OSM = {
    id: 'openstreetmap',
    name: 'Open Street Map',
    enabled: false,
    layer: L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      minZoom: 1,
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    })
  };
  LAYER_GSM = {
    id: 'googlemaps',
    name: 'Google Street Maps',
    enabled: false,
    layer: L.tileLayer('https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i{z}!2i{x}!3i' +
      '{y}!4i256!2m3!1e0!2sm!3i349018013!3m9!2sen-US!3sUS!5e18!12m1!1e47!12m3!1e37!2m1!1ssmartmaps!4e0', {
      minZoom: 1,
      maxZoom: 22,
      attribution: '&copy; <a href=\'http://maps.google.com\'>Google Maps</a>'
    })
  };

  // Values to bind to Leaflet Directive
  layersControlOptions = { position: 'bottomright' };
  baseLayers = {
    'Open Street Map': this.LAYER_OSM.layer,
    'Google Street Maps': this.LAYER_GSM.layer
  };
  zoom = 15;
  // zoomOptions= L.control.zoom({position: 'topright'});
  zoomOptions = {
    position: 'topleft'
  }
  center = L.latLng([this.centerLat, this.centerLng]);

  // Marker cluster stuff
  markerClusterGroup: L.MarkerClusterGroup;
  markerClusterData: any[] = [];
  markerClusterOptions: L.MarkerClusterGroupOptions;

  // Search module
  searchField: string;
  schoolListFiltered: CompleterData;
  selectedSchoolID = '';
  @Output() onSchoolSel = new EventEmitter<string>();

  // School Details



  constructor(private completerService: CompleterService,
              private schoolService: SchoolService,
              private sharedDataService: ShareddataService,
              private mapService: MapService,
              private router: Router,
              private http: Http) {
    this.schoolListFiltered = new CustomData(http);
  }

  ngOnInit() {

    // get the school list and Map the schools only once time
    if (this.center.lat === -23.552133) {
      this.getSchoolsList();
    }

  }

  onSchoolSelected(item: CompleterItem) {
    console.log('onSchoolSelected', item);
    this.toggleSchoolDetails();
    if (item !== null) {
      console.log("aqui papu");
      console.log(item);

      this.selectedSchoolID = item ? item.originalObject.ID : '';
      // send school ID to school-details component via observable subject
      this.sharedDataService.sendSchoolID(this.selectedSchoolID);
      this.onSchoolSel.emit(this.selectedSchoolID);
      // Get the complete information about the selected school
      // this.getSchoolDetailedInformation(this.selectedSchoolID);
      // center the map in the selected school location
    }
  }

  getSchoolsList() {
    this.schoolSelectedFlag = true;
    this.schoolService.getAllSchools().then((res) => {
      //this.schoolsCoordinatesObject = res;
      //this.schoolsCoordinates = this.schoolsCoordinatesObject.schoolbs;
      this.schoolsCoordinates = res;
      console.log(this.schoolsCoordinates[1]);
      console.log("viste?");

      const data: any[] = [];
      console.log(this.schoolsCoordinates.length);
      let popup = '';
      let container = $('<div />');
      let marker;
      let school_i;
      container.on('click', '.getSchoolInfo', function(){
        alert('test');
      });
      for (let i = 0; i < this.schoolsCoordinates.length; i++) {
        container = $('<div />');
        school_i = this.schoolsCoordinates[i];
        popup = '<b>ESCOLA: </b>' + school_i.NO_ENTIDAD +
          '<br/><b>BAIRRO: </b>' + school_i.BAIRRO +
          '<br/><b>ENDEREÇO: </b>' + school_i.ENDERECO + ' - ' + school_i.NUMERO  +
          '<br/><b>LOC.: </b>' + school_i.lat + ', ' + school_i.lon +
          '<br/><a href="#" class="getSchoolInfo">Informaçao da escola</a>';

        // '<br/><input type="button" value="Ver informaçao da escola" id="bu-show-school-info" ' +
        // '(click)="showSchoolInfo($event)"/>';
        container.html(popup);
        container.append($('<span class="bold">').text('...'));
        marker = L.marker(L.latLng(school_i.lat, school_i.lon), {icon: this.schoolMarkerIcon});
        // data.push(marker.bindPopup($('<a href="#" class="speciallink">TestLink</a>').click(function() {alert('test'); })[0]));
        data.push(marker.bindPopup(container[0]));
      }
      this.markerClusterData = data;
      console.log('getschoollist: ' , this.center);
    }, (err) => {
      console.log(err);
    });
  }

  markerClusterReady(group: L.MarkerClusterGroup) {
    this.markerClusterGroup = group;
  }

  /*mapReady(map: L.Map) {
    map.addControl(L.control.zoom({position: 'topright'}));
  }*/

  toggleSchoolDetails() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle('push-right-school-details');
    const togglebutton: any = document.getElementById('toggle-school-details-icon');
    if (dom.classList.contains('push-right-school-details')) {
      togglebutton.classList.add('fa-chevron-left');
      togglebutton.classList.remove('fa-chevron-right');
    } else {
      // this.toggleSchoolDetailsIcon = 'chevron_left';
      togglebutton.classList.add('fa-chevron-right');
      togglebutton.classList.remove('fa-chevron-left');
    }
  }

  filterSchoolsByIndicator(form: any): void {
    console.log('form: ',form);

    if (form !== null) {

      this.mapService.showSchoolsByIndicator(form.indicator, form.min, form.max).then((res) => {
        this.schoolsCoordinates = res;
        console.log(this.schoolsCoordinates[1]);

        const data: any[] = [];
        console.log(this.schoolsCoordinates.length);
        let popup = '';
        let container = $('<div />');
        let marker;
        let school_i;
        container.on('click', '.getSchoolInfo', function(){
          alert('test');
        });
        for (let i = 0; i < this.schoolsCoordinates.length; i++) {
          container = $('<div />');
          school_i = this.schoolsCoordinates[i];
          popup = '<b>ESCOLA: </b>' + school_i.NO_ENTIDAD +
            '<br/><b>BAIRRO: </b>' + school_i.BAIRRO +
            '<br/><b>ENDEREÇO: </b>' + school_i.ENDERECO + ' - ' + school_i.NUMERO  +
            '<br/><b>LOC.: </b>' + school_i.lat + ', ' + school_i.lon +
            '<br/><a href="#" class="getSchoolInfo">Informaçao da escola</a>';

          // '<br/><input type="button" value="Ver informaçao da escola" id="bu-show-school-info" ' +
          // '(click)="showSchoolInfo($event)"/>';
          container.html(popup);
          container.append($('<span class="bold">').text('...'));
          marker = L.marker(L.latLng(school_i.lat, school_i.lon), {icon: this.schoolMarkerIcon});
          // data.push(marker.bindPopup($('<a href="#" class="speciallink">TestLink</a>').click(function() {alert('test'); })[0]));
          data.push(marker.bindPopup(container[0]));
        }
        this.markerClusterData = data;
        console.log('getschoollist: ' , this.center);
      }, (err) => {
        console.log(err);
      });
    }
  }
}
