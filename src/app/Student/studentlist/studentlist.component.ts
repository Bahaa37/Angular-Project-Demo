import { Component } from '@angular/core';
import { Student } from '../../_models/student';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.scss']
})
export class StudentlistComponent {
  students:Student[] = [
    new Student(1,"Bahaa",28,100),
    new Student(2,"Ahmed",29,80),
    new Student(3,"Mohamed",30,50),
    new Student(4,"Mahmoud",31,40),
    new Student(5,"Zain",32,70)
  ];

  existingStudent = new Student (0,"",0,0);
  dflag = false;
  getById(id: number){
    for (let i = 0; i < this.students.length; i++) {
      if(this.students[i].id==id) {
        this.existingStudent=this.students[i];
        this.dflag = true;
        break;
      }
    }
  }

  addstudent(s:Student){
    this.students.push(s);
  }
}
