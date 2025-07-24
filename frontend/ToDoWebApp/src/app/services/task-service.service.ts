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
private apiUrl = 'http://localhost:8080/api/tasks';
  constructor(private http: HttpClient) { }

    createTask(request: CreateTaskRequest): Observable<Task> {
    return this.http.post<Task>(`${this.apiUrl}/create`, request);
  }
}
