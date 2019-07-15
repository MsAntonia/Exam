import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Task }       from './task';
import { Observable } from 'rxjs/Observable';
// import { of as observableOf} from 'rxjs';
// import { from as observableFrom} from 'rxjs';

const URL:string='http://localhost:5555'

@Injectable({
  providedIn: 'root'
})
export class TaskService{
  //tasks:Task[];
  constructor(private http:HttpClient) { }

  getToDoList():Observable<Task[]>{
    return this.http.get<Task[]>(`${URL}/task`);  
  }

  // toggleCompleted(id:string):Observable<any>{

  // }
    //  toggleCompleted(id:string):void{
    //   this.tasks.map((task)=>{
    //  if(task._id === id){
    //    task.completed=!task.completed;
    //  }

    // });
    //  }

  getTaskById(id:string):Observable<Task>{
    return this.http.get<Task>(`${URL}/task/${id}`); 
  }

  deleteTask(id:string):Observable<any>{
    return this.http.delete(`${URL}/task/${id}`);

 }

  // addTask(task:Task):Observable<Task>{
  //   return this.http.post<Task>(`${URL}/task`,Task);

  // }

  saveTask(task:Task):Observable<Task>{
    //Update
    if(task._id){
    return  this.http.put<Task>(`${URL}/task/${task._id}`,task); 
    }
    else{
      //Add New
      task._id=task.created=undefined;
      return this.http.post<Task>(`${URL}/task`,task);

    }
  }//Save Task
  }
