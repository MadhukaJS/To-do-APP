// import { Routes } from '@angular/router';
// import { TaskFormComponent } from './component/task-form/task-form/task-form.component';
// import { TaskItemComponent } from './component/task-item/task-item/task-item.component';
// import { TaskListComponent } from './component/task-list/task-list/task-list.component';

// export const routes: Routes = [
//     {path:'app-task-form', component:TaskFormComponent,},
//     {path: 'app-task-item', component:TaskItemComponent},
//     {path: 'app-task-list',component:TaskListComponent}

// ];

import { Routes } from '@angular/router';
import { TaskFormComponent } from './component/task-form/task-form/task-form.component';
import { TaskItemComponent } from './component/task-item/task-item/task-item.component';
import { TaskListComponent } from './component/task-list/task-list/task-list.component';
import { provideHttpClient } from '@angular/common/http'; 

export const routes: Routes = [
  {
    path: 'app-task-form',
    component: TaskFormComponent,
  },
  {
    path: 'app-task-item',
    component: TaskItemComponent,
  },
  {
    path: 'app-task-list',
    component: TaskListComponent,
  },
  // Provide HttpClient for all routes
  { 
    path: '',
    providers: [provideHttpClient()], // <-- Add this
    children: [
      // Your existing routes
      { path: 'app-task-form', component: TaskFormComponent },
      { path: 'app-task-item', component: TaskItemComponent },
      { path: 'app-task-list', component: TaskListComponent },
    ]
  }
];
