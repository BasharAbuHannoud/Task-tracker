import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ITask} from "../../models/task";
import {faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  //@ts-ignore
  @Input() oneTask?: ITask;
  @Output() deleteTaskEvent: EventEmitter<ITask> = new EventEmitter<ITask>();
  @Output() toggleTaskEvent: EventEmitter<ITask> = new EventEmitter<ITask>();
  faTimes = faTimes;

  constructor() {
  }

  ngOnInit() {
  }

  onDelete() {
    this.deleteTaskEvent.emit()
  }
  onToggleReminder(){
    //@ts-ignore
    this.oneTask.reminder = !this.oneTask?.reminder
    this.toggleTaskEvent.emit()
  }
}
