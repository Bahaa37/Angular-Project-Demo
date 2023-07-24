import { Component, Output, EventEmitter } from '@angular/core';
import { Student } from '../../_models/student';

@Component({
  selector: 'app-studentadd',
  templateUrl: './studentadd.component.html',
  styleUrls: ['./studentadd.component.scss']
})
export class StudentaddComponent {
  @Output() onstudentAdd :EventEmitter<Student> = new EventEmitter<Student>();
  newStudent = new Student (0,"",0,0);
  save(){
    this.onstudentAdd.emit(new Student(this.newStudent.id, this.newStudent.name, this.newStudent.age, this.newStudent.degree));
  };
}
