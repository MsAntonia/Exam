import { Component, 
             OnInit,
             Input,
             Output,
             EventEmitter} from '@angular/core';
import { Location }        from '@angular/common';
import { Task }            from '../model/task';
import { TaskService }     from '../model/task-service';
import { Router,NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {
  @Input('selected-task') task:Task;
  @Output('taskUpdated') taskUpdated:EventEmitter<any> = new EventEmitter();
  addNewMode:boolean = false;
   constructor(private dataSource:TaskService,
               private router:Router,
               private location:Location){
      this.router.events
                .subscribe((event)=>{
                //console.log(event))
                if ( event instanceof NavigationEnd && event.url === '/add-new'){
                  this.task = new Task();
                  this.addNewMode = true;
                }
                else{
                   this.addNewMode = false;
                }

                });

     }//constructor

  ngOnInit() {
  }

  saveTask():void{
   this.dataSource.saveTask(this.task)
      .subscribe((task)=>{
                  this.task=task
                  this.taskUpdated.emit();
                 },
                 (err)=>console.log(err),
                 ()=>console.log(`add/update completed`));
   }

  goBack():void{
    this.location.back();
  }

}


