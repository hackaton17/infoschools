import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import {HeaderModule} from './header/header.module';
import {LayoutComponent} from './layout.component';
import {HttpModule} from '@angular/http';
import { MapComponent } from './map/map.component';
import {MapModule} from './map/map.module';
import {SchoolService} from '../school.service';
import {ShareddataService} from '../services/shareddata.service';
import {Ng2CompleterModule} from 'ng2-completer';
import {FormsModule} from '@angular/forms';
import {MapService} from '../map.service';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    HttpModule,
    HeaderModule,
    FormsModule,
    Ng2CompleterModule
  ],
  declarations: [
    LayoutComponent
  ],
  providers: [SchoolService, ShareddataService, MapService]
})
export class LayoutModule { }
