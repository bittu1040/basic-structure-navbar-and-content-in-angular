import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {AddUserComponent} from '../add-user/add-user.component';
import {ViewUserComponent} from '../view-user/view-user.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, AddUserComponent,ViewUserComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
