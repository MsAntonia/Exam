// import { Injectable }     from '@angular/core';

// import { Task }           from './task';
// import { Observable }  from 'rxjs';
// // import 'rxjs/add/observable/from';
// // import 'rxjs/add/observable/of';
// import { of as observableOf} from 'rxjs';
// import { from as observableFrom} from 'rxjs';

// const tasks:Task[] = [
//   new Task(
//       1,
//      'Read JavaScript notes.',
//       false,
//       Date.now()
//    ),
//    new Task(
//       2,
//      'Read TypeScript notes.',
//       false,
//       Date.now()
//    ),
//   new Task(
//       3,
//      'Read Nodejs notes.',
//       false,
//       Date.now()
//    ),
//   new Task(
//       4,
//      'Read AngularJS notes.',
//       true,
//       Date.now()
//    ),
//    new Task(
//     5,
//    'Read jQuery notes.',
//     false,
//     Date.now()
//  ),
//   new Task(
//    6,
//   'Read Chai notes.',
//    true,
//    Date.now()
//   )
//  ];

// const removedItems:Task[]=[];

// @Injectable({
//   providedIn: 'root'
// })
// export class StaticDatasourceService {
//   addNewTask(task: Task) {
//     throw new Error("Method not implemented.");
//   }

//   constructor() { }
  

//   getToDoList():Observable<Task[]>{
//     return observableOf(tasks);
//   }

//   getTaskById(id:number):Observable<Task>{
//       let task:Task = tasks.filter((task)=>task._id === id).pop();
//       return observableFrom([task]);
//   }

//   // toggleCompleted(id:number):void{
//   //   tasks.map((task)=>{
//   //     if(task._id === id){
//   //       task.completed=!task.completed;
//   //     }

//   //   });
//   // }


//   deleteTask(id:number):void{
//     let index = tasks.findIndex((task=>task._id===id));
//     if(index > -1){
//       tasks.splice(index,1);
//     }
//   }

//   saveTask(task:Task):void{
//     if (task._id){
//     tasks.forEach ( (ts)=>{
//       if(ts._id === task._id){
//           ts = task;
//       }
//     });
//     }
//     else{
//       task._id = tasks[tasks.length-1]._id + 1;
//       task.created= Date.now();
//       tasks.push(task);
//       console.log(tasks);
//     }
   
//     }
  
//   // deleteTask(id:number):void{
//   //   tasks.splice(tasks.findIndex((task=>task._id===id),1));
//   // }

//   // addTask(task:Task):void{
//   //   tasks.unshift(task);
//   // }
// }