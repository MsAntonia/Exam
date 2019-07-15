import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { FormsModule }         from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';     

import { AppRoutingModule }  from './app-routing.module';
import { AppComponent }      from './app.component';


import { TaskService }               from './model/task-service';
import { TodoListComponent }         from './todo-list/todo-list.component';
import { TodoRoutingModule }         from './todo-routing/todo-routing.module';
import { RemovedTodoItemsComponent } from './removed-todo-items/removed-todo-items.component';
import { TaskDetailsComponent }      from './task-details/task-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    RemovedTodoItemsComponent,
    TaskDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    TodoRoutingModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
