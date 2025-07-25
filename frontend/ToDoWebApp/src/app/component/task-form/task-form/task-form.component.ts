import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskServiceService, CreateTaskRequest, Task } from '../../../services/task-service.service';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {

  recentTasks: Task[] = [];

  //-----------------task form--------------------------
  task: CreateTaskRequest = {
    title: '',
    description: '',
    dueDate: ''
  };
  constructor(private TaskServiceService: TaskServiceService) { }

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

  //----------------------task list----------------------------

  ngOnInit() {
    this.fetchRecentTasks();
  }
  fetchRecentTasks() {
    this.TaskServiceService.getRecentTasks().subscribe({
      next: (data) => this.recentTasks = data,
      error: (err) => console.error('Error loading recent tasks', err)
    });
  }
  markAsDone(taskId: number) {
    this.TaskServiceService.markTaskAsDone(taskId).subscribe({
      next: () => {
        console.log(`Task ${taskId} marked as done`);
        this.fetchRecentTasks(); // Refresh list
      },
      error: (err) => console.error('Failed to mark task as done:', err)
    });
  }

}
