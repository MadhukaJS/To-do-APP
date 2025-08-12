import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CreateTaskRequest {
  title: string;
  description: string;
  dueDate?: string;
}

export interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
constructor(private http: HttpClient) { }

private apiUrl = 'http://localhost:8080/api/tasks';
  

//create tasks
    createTask(request: CreateTaskRequest): Observable<Task> {
    return this.http.post<Task>(`${this.apiUrl}/create`, request);
  }

//get last 5 tasks
    getRecentTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}/get`);
  }

markTaskAsDone(taskId: number): Observable<void> {
  return this.http.put<void>(`${this.apiUrl}/${taskId}/complete`, {});
}


}
