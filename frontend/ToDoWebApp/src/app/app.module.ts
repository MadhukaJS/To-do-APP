// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskFormComponent } from './component/task-form/task-form/task-form.component';
import { TaskListComponent } from './component/task-list/task-list/task-list.component';

@NgModule({
  declarations: [
    //AppComponent // Add this if it's not standalone
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TaskFormComponent,
    TaskListComponent
  ],
  //bootstrap: [AppComponent]
})
export class AppModule {}
