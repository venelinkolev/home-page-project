import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { MainPageRoutingModule } from './main-page-routing.module';
import { HeaderComponent } from '../header/header.component';
import { AsideComponent } from '../aside/aside.component';
import { ChartsModule } from '../charts/charts.module';



@NgModule({
  declarations: [
    MainPageComponent,
    HeaderComponent,
    AsideComponent,
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    ChartsModule,
  ],
  exports: [MainPageComponent, HeaderComponent, AsideComponent],
})
export class MainPageModule { }
