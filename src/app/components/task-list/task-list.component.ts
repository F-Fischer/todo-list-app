import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../interfaces/task.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks$: Observable<Task[]>;

  constructor(private taskService: TaskService) {
    this.tasks$ = this.taskService.getTasks();
  }

  ngOnInit(): void {}

  toggleTask(task: Task) {
    task.completed = !task.completed;
    this.taskService.updateTask(task);
  }
}
