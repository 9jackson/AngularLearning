import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
}

//Component.prototype.

//const component = new Component({});
//component.

// There is an appmodule- we call it root
// Submodules under appmodule - modulename.module.ts
//Components - linked to a submodule or root module.
// Providers - linked to component or module - service.