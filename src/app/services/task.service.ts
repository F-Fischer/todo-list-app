import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];
  private tasks$ = new BehaviorSubject<Task[]>(this.tasks);

  constructor() {}

  getTasks() {
    return this.tasks$.asObservable();
  }

  addTask(task: Task) {
    this.tasks.push(task);
    this.tasks$.next(this.tasks);
  }

  updateTask(task: Task) {
    const index = this.tasks.findIndex((t) => t.id === task.id);
    this.tasks[index] = task;
    this.tasks$.next(this.tasks);
  }
}
