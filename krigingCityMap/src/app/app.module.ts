import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {NotFoundModule} from './not-found/not-found.module';
import { LayoutComponent } from './layout/layout.component';
import {AppRoutingModule} from './app-routing.module';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {LeafletMarkerClusterModule} from '@asymmetrik/ngx-leaflet-markercluster';
import {SchoolService} from './school.service';
import {ShareddataService} from './services/shareddata.service';

@NgModule({
  declarations: [
    AppComponent,
    // LayoutComponent,
    // NotFoundComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NotFoundModule,
    LeafletModule.forRoot(),
    LeafletMarkerClusterModule.forRoot()
  ],
  providers: [SchoolService, ShareddataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
