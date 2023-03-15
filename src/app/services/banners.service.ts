import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  const InterceptorSkipHeader = 'X-Skip-Interceptor';
   // const localoptionHeaders=new HttpHeaders();
   
    //localoptionHeaders.set(InterceptorSkipHeader,'skip');
    //If we change value from headers in constant it will not work
   const headers = new HttpHeaders().set(InterceptorSkipHeader, 'skip');
  // localoptionHeaders.append('Content-Type','application/json');
  //const headers = { SkipInterceptor: 'skip' }
  //  ,{options:localoptionHeaders}
  console.log(headers);
  return this.http.get<Banner[]>("http://localhost:3000/banner"
  , {headers:headers}
 

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