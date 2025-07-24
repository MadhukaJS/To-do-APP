import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskServiceService , CreateTaskRequest } from '../../../services/task-service.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule,HttpClientModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {

 task: CreateTaskRequest = {
    title: '',
    description: '',
    dueDate: ''
  };
 constructor(private TaskServiceService: TaskServiceService) {}

  onSubmit() {
    this.TaskServiceService.createTask(this.task).subscribe({
      next: (response) => {
        console.log('Task created:', response);
        // Optionally reset the form or navigate
      },
      error: (err) => {
        console.error('Error creating task:', err);
      }
    });
  }
}
