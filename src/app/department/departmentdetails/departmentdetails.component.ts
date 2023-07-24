import { Component, Input, OnChanges, OnInit, Output, EventEmitter } from '@angular/core';
import { DepartmentService } from '../../_services/department.service';
import { Department } from '../../_models/department';
import { ActivatedRoute } from '@angular/router';
import { DepartmentDB } from 'src/app/_models/department-db';

@Component({
  selector: 'app-departmentdetails',
  templateUrl: './departmentdetails.component.html',
  styleUrls: ['./departmentdetails.component.scss']
})
export class DepartmentdetailsComponent implements OnInit {
  @Input() id:number = 0;
  @Output() onHide:EventEmitter<boolean> = new EventEmitter<boolean>();
  // // dflag = false;
  // dept:Department|null = new Department();
  dept:DepartmentDB|null = new DepartmentDB();
  constructor(private departmentservice:DepartmentService, private activatedRoute : ActivatedRoute){}
  ngOnInit(): void {
      this.activatedRoute.params.subscribe(a=>{
        this.departmentservice.getById(a['id']).subscribe(
          data=>this.dept=data
          );
        // this.dept = this.departmentservice.getById(a['id'])
      });
    // this.dept =this.departmentservice.getById(this.id);
    // this.dflag =true;
  }

//   hide(){
//     this.onHide.emit(false);
// }
}
