import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { DeepakComponent2 } from './component2/component2.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderModule } from './components/header/header.module';
import { HomeModule } from './components/home/home.module';
import { BannerComponent } from './components/banner/banner.component';
import { BannersService } from './services/banners.service';
import { LoginComponent } from './auth/login/login.component';
import { AuthenticationInterceptor } from './authentication.interceptor';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,BannerComponent, LoginComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule
    // HeaderModule
  ],
    providers:[BannersService,
      { 
        provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi:true
      }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
