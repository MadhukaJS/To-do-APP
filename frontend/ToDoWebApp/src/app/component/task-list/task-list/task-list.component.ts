import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskServiceService, Task } from '../../../services/task-service.service';
import { HttpClientModule } from '@angular/common/http'; 

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule,HttpClientModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  recentTasks: Task[] = [];
 constructor(private TaskServiceService: TaskServiceService) {}

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
