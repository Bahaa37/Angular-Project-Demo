import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../../_models/student';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.scss']
})
export class StudentdetailsComponent {
  @Input() studentdetails = new Student (0,"",0,0);
  @Output() onHide:EventEmitter<boolean> = new EventEmitter<boolean>();
    hide(){
      this.onHide.emit(false);
  }
  }
