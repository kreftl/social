import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapComponent } from './components/map/map.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PropertiesComponent } from './components/modals/properties/properties.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    PropertiesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LeafletModule.forRoot(),
    ModalModule.forRoot()
  ],
  entryComponents: [
    PropertiesComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
