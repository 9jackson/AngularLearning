import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Banner } from '../components/home/home.model';



@Injectable({
  providedIn: 'root'
})
export class BannersService {

  
  constructor(private http: HttpClient) { 
  }

getTopBannerItems(): Observable<Banner[]>
{

  return this.http.get<Banner[]>("http://localhost:3000/banner"
  //,{headers: }
  )
  ;
  //<User[]>
}

}

//obj =new Object ()
//obj =new ClassName()
//obj.f1="abc";
//obj.f2="abc";
//obj={f1:abc,f2:dev}