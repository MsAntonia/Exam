import { Component, OnInit }       from '@angular/core';

import {Task}                      from '../model/task'; 
import { TaskService }             from '../model/task-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  tasks:Task[];
  selectedTask:Task;
  message:string='';
  title:string='Task Manager';
  

  constructor(private dataSource:TaskService) { }
  ngOnInit():void{
    this.getTasks();  
  }
  
  getTasks():void{
    this.dataSource.getToDoList()
                   .subscribe ((list)=>this.tasks=list,
                               (err)=>console.log(err),
                               ()=>console.log ('task list loaded'));
  }
  
  
  onSelectTask(id:string):void{
    this.dataSource.getTaskById(id)
                      .subscribe((task)=> this.selectedTask = task,
                                (err)=>console.log(err),
                                ()=>console.log('task loaded'));
                                
  }
  deleteTask(event,id:string):void{
    event.stopPropagation();
    this.dataSource.deleteTask(id)
                   .subscribe( (status)=>{
                     console.log (status)
                     this.getTasks();
                   },
                   (err)=>console.log(err),
                   ()=>console.log('task deleted'));
  }
  fromChildComponent():void{
    console.log(`From Child`);
  }
}