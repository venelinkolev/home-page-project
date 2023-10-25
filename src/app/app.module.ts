import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AsideComponent } from './components/aside/aside.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { MainTableComponent } from './components/main-table/main-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from './components/charts/charts.module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    DashboardComponent,
    InfoCardComponent,
    MainTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ChartsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
