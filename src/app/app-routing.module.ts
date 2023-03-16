import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [

  {
    path:'',redirectTo:'',pathMatch:'full'
  },
  {

    //Lazy Loading
     path: 'home',
     loadChildren: ()=> import ('./components/home/home.module').then (m=>m.HomeModule)
    // children:['home']
    
    //    canActivate: [authGuard]
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
