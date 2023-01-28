import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ITask} from "../../models/task";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() onSubmitTaskEvent: EventEmitter<ITask> = new EventEmitter<ITask>();
  text: string = '';
  day: string = '';
  reminder: boolean = false;

  validationTask: boolean = false;
  validationDay: boolean = false;


  valMsg = {
    task: "please add task",
    day: "please add day & date"
  }

  constructor() {
  }

  ngOnInit() {

  }


  public ClearValidation(): void {
    if (this.text) this.validationTask = false;
    if (this.day) this.validationDay = false;
  }

  onSubmitTask(): void {
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    if (!this.text) this.validationTask = true;

    if (!this.day) this.validationDay = true

    if (this.day && this.text) {
      this.onSubmitTaskEvent.emit(newTask)
      this.text = '';
      this.day = '';
      this.reminder = false;
    }

  }

}
