import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {LeafletMarkerClusterModule} from '@asymmetrik/ngx-leaflet-markercluster';
import {MapComponent} from './map.component';
import { SchoolDetailsComponent } from './school-details/school-details.component';
import {Ng2CompleterModule} from 'ng2-completer';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MapRoutingModule,
    LeafletModule,
    LeafletMarkerClusterModule,
    FormsModule,
    Ng2CompleterModule
  ],
  declarations: [
    MapComponent,
    SchoolDetailsComponent
  ]
})
export class MapModule { }
