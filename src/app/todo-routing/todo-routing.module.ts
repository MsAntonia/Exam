import { NgModule }            from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { TodoListComponent }   from '../todo-list/todo-list.component';
import { TaskDetailsComponent }   from '../task-details/task-details.component';
import { RemovedTodoItemsComponent }   from '../removed-todo-items/removed-todo-items.component';

const routes:Routes = [
  {path:'list', component:TodoListComponent}
, {path:'add-new', component:TaskDetailsComponent}
, {path:'removed', component:RemovedTodoItemsComponent}
, {path:'**', redirectTo:'/list'}

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class TodoRoutingModule { }
