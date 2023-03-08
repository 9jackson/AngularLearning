import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Banner } from '../components/banner/banner.model';


@Injectable({
  providedIn: 'root'
})
export class BannersService {

  
  constructor(private http: HttpClient) { 
  }

getTopBannerItems(): Observable<Banner[]>
{
  return this.http.get<Banner[]>("http://localhost:3000/banner");
  //<User[]>
}

}
