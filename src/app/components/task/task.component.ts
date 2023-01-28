import {Component, OnInit} from '@angular/core';
import {TaskService} from "../../services/task.service";
import {ITask} from "../../models/task";
import {UiService} from "../../services/ui.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  showAddTask: boolean = false;

  constructor(private tasksServices: TaskService, private uiService: UiService) {
    this.uiService.onToggle().subscribe(observe => this.showAddTask = observe)
  }

  tasks: ITask[] = []

  ngOnInit() {
    this.tasksServices.getTasks().subscribe(tasksRes => this.tasks = tasksRes);
  }

  onDeleteTask(task: ITask) {
    this.tasksServices.deleteTask(task).subscribe(res => res && window.location.reload())
  }

  toggleReminder(task: ITask) {
    this.tasksServices.updateReminder(task).subscribe(res => console.log('res', res))
  }

  onSubmitTask(task: ITask) {
    this.tasksServices.postTask(task).subscribe(res => this.tasks.push(res))
  }

}
