import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CardComponent } from './card/card.component';
import { UsersService } from 'src/app/services/users.service';
import { AppModule } from 'src/app/app.module';
import { BannerComponent } from '../banner/banner.component';
import { BannersService } from 'src/app/services/banners.service';
import { HomeRoutingModule } from './home-routing.module';
import { Component1Component } from 'src/app/component1/component1.component';




@NgModule({
  declarations: [
    HomeComponent,
    CardComponent,
    Component1Component
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
  ,  providers:[UsersService,BannersService]
})
export class HomeModule { }
