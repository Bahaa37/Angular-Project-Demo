import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Student } from "../_models/student";

@Component({
    selector:"stu",
    templateUrl: './student.component.html',
    styleUrls:['./student.component.css']

})
export class StudentComponent {
  @Output () onRandomChange : EventEmitter<number> = new EventEmitter<number>();
  @Input() Id = 3;
  Num = 0;
  show(){
    this.onRandomChange.emit(this. Num);
  }
}

