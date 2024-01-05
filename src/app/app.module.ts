import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { MainTableComponent } from './components/main-table/main-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from './components/charts/charts.module';
import { MatTableModule } from '@angular/material/table';
import { LoginComponent } from './components/login/login.component';
import { MainPageModule } from './components/main-page/main-page.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InfoCardComponent,
    MainTableComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ChartsModule,
    MatTableModule,
    MainPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
