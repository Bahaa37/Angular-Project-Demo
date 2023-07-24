import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { StudentlistComponent } from './Student/studentlist/studentlist.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentlistComponent } from './department/departmentlist/departmentlist.component';
import { DepartmentaddComponent } from './department/departmentadd/departmentadd.component';
import { DepartmentdetailsComponent } from './department/departmentdetails/departmentdetails.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes:Routes = [
  {path: "home",component: HomeComponent},
  {path: "contactus",component: ContactusComponent},
  {path: "aboutus",component: AboutusComponent},
  {path: "student",component: StudentlistComponent},
  {path: "department",component: DepartmentlistComponent,children:[
    {path: "details/:id",component: DepartmentdetailsComponent},
    {path: "add",component:DepartmentaddComponent},
  ]},
  {path: "", redirectTo: "/home", pathMatch:"full"},
  {path: "**",component:NotfoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
