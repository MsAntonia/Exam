import mongoose from 'mongoose';
import { TaskSchema } from '../model';

const Task = mongoose.model('task',TaskSchema);

//POST (insert new task)
export const addNewTask = (req,res)=>{
    const newTask = new Task(req.body);

    // newTask.save((err,task)=>{
    //     if(err){
    //         //...
    //         return;
    //     }

    //     res.json(task);
    // });
    newTask
        .save()
        .then((task)=>res.json(task))
        .catch((err)=>res.json(err));
}; //add new task

//GET (read all tasks)
export const getTasks = (req,res)=>{
    Task
        .find({})
        .then((tasks)=>res.json(tasks))
        .catch((err)=>res.json(err));
};//get tasks

export const getTaskById= (req,res)=>{
    Task
        .findOne({_id:req.params.taskId})
        .then((task)=>res.json(task))
        .catch((err)=>res.json(err));

};//get task by id
//PUT
export const updateTask = (req,res)=>{
    Task
        .findOneAndUpdate({_id: req.params.taskId}, //критерий
                          req.body, //променените данни
                          {new:true
        })
        .then((task)=>res.json(task))
        .catch((err)=>res.json(err));
};//update task
export const deleteTask = (req,res)=>{
    Task
        .remove ({_id:req.params.taskId})
        //.deleteOne({_id:req.params.taskId})
        .then((status)=>res.json(status))
        .catch((err)=>req.json(err));
}; //delete task