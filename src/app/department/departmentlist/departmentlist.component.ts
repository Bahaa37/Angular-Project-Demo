import { Component, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { DepartmentService } from '../../_services/department.service';
import { Department } from '../../_models/department';
import { DepartmentDB } from '../../_models/department-db';

@Component({
  selector: 'app-departmentlist',
  templateUrl: './departmentlist.component.html',
  styleUrls: ['./departmentlist.component.scss']
})
export class DepartmentlistComponent implements OnInit {
  departments: DepartmentDB[] = [];
  // deptiddetails = 0;
  constructor(public departmentservice: DepartmentService) { }
  ngOnInit(): void {
    // this.depts = this.departmentservice.getAll();
    this.departmentservice.getAll().subscribe(x => {
      this.departments = x;
    }
    );
  }
  delete(id: number|undefined): void  {
    if (confirm('Are you sure you want to delete ?')) {
      this.departmentservice.delete(id).subscribe(x => {
        console.log(x);
      }
      );
    }
  }
  // showDetails(id:any){
  //   this.deptiddetails=id;
  // }

  // ngOnDestroy(): void {
  //   throw new Error('Method not implemented.');
  // }
  // ngOnChanges(changes: SimpleChanges): void {
  //   changes[0].currentValue
  // }

}
