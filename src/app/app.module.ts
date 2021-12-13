import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { LoginComponent } from './component/login/login.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { AppRoutingModule } from './app.routing.module';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { MainComponent } from './component/main/main.component';
import { BoxComponent } from './component/box/box.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { CardComponent } from './component/card/card.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomepageComponent,
    SidebarComponent,
    MainComponent,
    BoxComponent,
    DashboardComponent,
    CardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({
        "radius": 60,
        "space": -10,
        "outerStrokeGradient": true,
        "outerStrokeWidth": 10,
        "outerStrokeColor": "#4882c2",
        "outerStrokeGradientStopColor": "#53a9ff",
        "innerStrokeColor": "#e7e8ea",
        "innerStrokeWidth": 10,
        "title": "CAPEX",
        "animateTitle": false,
        "animationDuration": 1000,
        "showUnits": false,
        "showBackground": false,
        "clockwise": false,
        "startFromZero": false,
        "lazy": true})
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
