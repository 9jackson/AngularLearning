import { Component, OnInit } from '@angular/core';
import { User } from './home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit {

  name:string='Deepak';
  listofthings: Array<User>= [
    {
      firstName: "Deepak",
      lastName: "George"
    },
    {
      firstName: "Lijoy",
      lastName: "George"
    }
   ];

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    setTimeout(() => {
      this.name="Lijoy";
      console.log("Changing Name " + this.name );
    }, 3000);

    console.log("Hello " + this.name );
  }

  

}
