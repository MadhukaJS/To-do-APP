import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define the request and response types
export interface CreateTaskRequest {
  title: string;
  description: string;
  dueDate?: string;
  // Add any additional fields from your backend DTO
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
private apiUrl = 'http://localhost:8080/api/tasks/create';
  constructor(private http: HttpClient) { }

    createTask(request: CreateTaskRequest): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, request);
  }
}
