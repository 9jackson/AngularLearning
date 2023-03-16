import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Banner } from '../components/home/home.model';



@Injectable({
  providedIn: 'root' // any or module name
})
export class BannersService {

  
  constructor(private http: HttpClient) { 
  }

getTopBannerItems(): Observable<Banner[]>
{
  const InterceptorSkipHeader = 'X-Skip-Interceptor';
    let localoptionHeaders=new HttpHeaders();
   
   // localoptionHeaders.set('Authorization','skip');
    //localoptionHeaders.set('Authorization','skip2');
     localoptionHeaders.set('InterceptorSkipHeader','skip');
    // localoptionHeaders.append('InterceptorSkipHeader','skip2');
    //If we change value from headers in constant it will not work
   //const headers1 = new HttpHeaders().set(InterceptorSkipHeader, 'skip');
  // localoptionHeaders.append('Content-Type','application/json');
  //const headers = { SkipInterceptor: 'skip' }
  //  ,{options:localoptionHeaders}
  console.log(localoptionHeaders);
  return this.http.get<Banner[]>("http://localhost:3000/banner"
  , {headers:localoptionHeaders}
  
 

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