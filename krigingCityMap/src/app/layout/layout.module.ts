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

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    HttpModule,
    HeaderModule
  ],
  declarations: [
    LayoutComponent
  ],
  providers: [SchoolService, ShareddataService]
})
export class LayoutModule { }
