import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  taskForm: FormGroup;

  constructor(private fb: FormBuilder, private taskService: TaskService) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.taskForm.valid) {
      const task: Task = {
        id: Date.now(),
        title: this.taskForm.get('title')?.value,
        completed: false
      };
      this.taskService.addTask(task);
      this.taskForm.reset();
    }
  }
}
