import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../home.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() firstname1='';
  @Input()  lastname1 ?='' ;
  @Input() designation1 ?='';
  @Output() sendUser=new EventEmitter();

  viewUser()
  {
    //new Object implements User()
    const user: User={
      firstName: this.firstname1,
      lastName: this.lastname1

    };
    this.sendUser.emit(user);
      
      //this.firstname1);
  }
    
  }



