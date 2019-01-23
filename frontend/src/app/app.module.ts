import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapComponent } from './components/map/map.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PropertiesComponent } from './components/modals/properties/properties.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnalyticsComponent } from './components/modals/analytics/analytics.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FilterComponent } from './components/modals/filter/filter.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    PropertiesComponent,
    AnalyticsComponent,
    FilterComponent    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxChartsModule,
    FormsModule,
    BrowserAnimationsModule,
    LeafletModule.forRoot(),
    ModalModule.forRoot()
  ],
  entryComponents: [
    PropertiesComponent,
    AnalyticsComponent,
    FilterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
