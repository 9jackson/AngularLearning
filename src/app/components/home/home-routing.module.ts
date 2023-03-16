import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component1Component } from 'src/app/component1/component1.component';
import { HomeComponent } from './home.component';



const routes: Routes = [
  {
     path: '',
     component: HomeComponent,
     children:[
      {
        path: 'room',
        component: Component1Component
      }
     ]
    
    //    canActivate: [authGuard]
  },

  // {
  //   path: 'room',
  //   component: Component1Component,
    
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
