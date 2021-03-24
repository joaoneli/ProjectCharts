import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule, MDBBootstrapModule, WavesModule } from 'angular-bootstrap-md'
import { AngularMaterialModule } from './angular-material-module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardGridComponent } from './components/dashboard/dashboard-grid/dashboard-grid.component';
import { DashboardChartComponent } from './components/dashboard/dashboard-chart/dashboard-chart.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardGridComponent,
    DashboardChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ChartsModule,
    WavesModule,
    AngularMaterialModule,
    MDBBootstrapModule.forRoot(),
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
