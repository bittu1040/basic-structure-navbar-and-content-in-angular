import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  viewName:string= '';


  addUser(){
this.viewName= 'addUser';
  }

  viewUser(){
    this.viewName= 'viewUser';
  }
}
