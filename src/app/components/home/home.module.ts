import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CardComponent } from './card/card.component';
import { UsersService } from 'src/app/services/users.service';
import { AppModule } from 'src/app/app.module';



@NgModule({
  declarations: [
    HomeComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ]
  ,  providers:[UsersService]
})
export class HomeModule { }
