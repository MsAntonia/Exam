import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const TaskSchema = new Schema({
    title:{
        type:String,
        required: 'Title is required'
    },
    completed:{
        type:Boolean,
        required: 'Status is required',
        default:false 
    },
    created:{
        type:Date,
        default:Date.now
    }
});