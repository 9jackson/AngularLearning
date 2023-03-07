import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { DeepakComponent2 } from './component2/component2.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderModule } from './components/header/header.module';
import { HomeModule } from './components/home/home.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
    // HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
