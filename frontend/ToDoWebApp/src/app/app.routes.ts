import { Routes } from '@angular/router';
import { TaskFormComponent } from './component/task-form/task-form/task-form.component';
import { provideHttpClient } from '@angular/common/http';

export const routes: Routes = [
  {
    path: '',
    component: TaskFormComponent,
  },
  // Provide HttpClient for all routes
  {
    path: '',
    providers: [provideHttpClient()],
    children: [
      { path: 'app-task-form', component: TaskFormComponent },
    ]
  }
];
