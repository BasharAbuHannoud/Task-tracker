import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ITask} from "../models/task";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = "http://localhost:3000/tasks";

  constructor(private http: HttpClient) {
  }

  data: ITask[] = [];

  getTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>(this.apiUrl)
  }

  deleteTask(task: ITask): Observable<ITask> {
    return this.http.delete<ITask>(`${this.apiUrl}/${task.id}`)
  }

  updateReminder(task: ITask): Observable<ITask> {
    return this.http.put<ITask>(`${this.apiUrl}/${task.id}`, task, httpOptions)
  }

  postTask(task: ITask): Observable<ITask> {
    return this.http.post<ITask>(`${this.apiUrl}`, task, httpOptions)
  }
}
