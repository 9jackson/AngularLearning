import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { User } from '../components/home/home.model';



@Injectable({
  providedIn: 'root'//HomeModule
})
export class UsersService {

  // private users:User[]=[];

  constructor(private http: HttpClient) { 
  }

getUsers(): Observable<User[]>
{
  return this.http.get<User[]>("http://localhost:3000/Users");
  //<User[]>
}

}
