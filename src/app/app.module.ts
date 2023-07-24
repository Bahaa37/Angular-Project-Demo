import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { StudentComponent } from './Student/student.component';
import { StudentlistComponent } from './Student/studentlist/studentlist.component';
import { StudentaddComponent } from './Student/studentadd/studentadd.component';
import { StudentdetailsComponent } from './Student/studentdetails/studentdetails.component';

import { DepartmentComponent } from './department/department.component';
import { DepartmentlistComponent } from './department/departmentlist/departmentlist.component';
import { DepartmentaddComponent } from './department/departmentadd/departmentadd.component';
import { DepartmentdetailsComponent } from './department/departmentdetails/departmentdetails.component';

import { HomeComponent } from './home/home.component';
import { SharedComponent } from './shared/shared.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NotfoundComponent } from './notfound/notfound.component';




@NgModule({
  declarations: [
    AppComponent,StudentComponent, DepartmentComponent, StudentlistComponent, StudentaddComponent, StudentdetailsComponent, DepartmentlistComponent, DepartmentaddComponent, DepartmentdetailsComponent, HomeComponent, SharedComponent, AboutusComponent, ContactusComponent, NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],//[DepartmentService]
  bootstrap: [AppComponent]
})
export class AppModule { }
