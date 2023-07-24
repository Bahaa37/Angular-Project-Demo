import { Component } from '@angular/core';
import { Department } from '../../_models/department';
import { DepartmentService } from '../../_services/department.service';
import { Router } from '@angular/router';
import { DepartmentDB } from 'src/app/_models/department-db';

@Component({
  selector: 'app-departmentadd',
  templateUrl: './departmentadd.component.html',
  styleUrls: ['./departmentadd.component.scss']
})
export class DepartmentaddComponent {
  constructor(private departmentService:DepartmentService,public rotuer:Router){}
  newDept:DepartmentDB = new DepartmentDB();
  save(){
    this.departmentService.add(this.newDept).subscribe(
      data=>{console.log(data),
      this.rotuer.navigateByUrl("/department");
   });
  }
}
