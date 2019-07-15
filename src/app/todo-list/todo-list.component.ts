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

  // toggleCompleted(id:number):void{
  //   this.dataSource.toggleCompleted(id);

  // }

  // deleteTask(event,id:number):void{
  //   event.preventDefault();
  //   this.dataSource.deleteTask(id),
  //                 //    .subscribe((status: any)=>{
  //                 //    console.log (status)
  //                 //    this.getTasks(); 
  //                 //  },
  //                  (err: any)=>console.log(err),
  //                  ()=>console.log('task deleted');
  // }
  
  // addTask(el:any):void{
  //   if(el: any.value.trim().length>0){
  //     let newTask:Task = new Task(this.tasks.length+1, el.value,false,Date.now());
  //     this.dataSource.addTask(newTask);

  //   }
  // }
}
