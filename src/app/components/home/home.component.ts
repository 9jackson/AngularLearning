import { Component, OnInit } from '@angular/core';
import { BannersService } from 'src/app/services/banners.service';
import { UsersService } from 'src/app/services/users.service';
import { User } from './home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UsersService, BannersService]
  
})
export class HomeComponent  implements OnInit {

  name:string='Deepak';

  // listofthingsstatic: Array<User>= [
  //   {
  //     firstName: "Deepak",
  //     lastName: "George",
  //     designation:"student"
  //   },
  //   {
  //     firstName: "Lijoy",
  //     lastName: "George"
  //   }
  //  ];

   listofthings : User[]=[];

   constructor(private userService: UsersService) {
    
  }

  getUsers(): void{
  this.userService.getUsers()
  .subscribe(data => (this.listofthings=data)
       
    );
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    // setTimeout(() => {
    //   this.name="Lijoy";
    //   console.log("Changing Name " + this.name );
    // }, 3000);

    this.getUsers();
    console.log(this.listofthings);

    console.log("Hello " + this.name + " I am in ngOnInit" );
  }

 
  

}
