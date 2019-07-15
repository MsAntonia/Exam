import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import {routes} from './router';

const app = express();
const PORT = process.env.PORT || 5555;
const HOST = '127.0.0.1';

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//Mongoose
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/tasks',{
  useNewUrlParser:true,
  useFindAndModify:false
});

//middleware
app.use('/', (req,res,next)=>{
  console.log(`execute middleware routine`);
  next();
});

//Endpoints
routes(app);

app.get('/', (req,res,next)=>{
    console.log(`get request`);
    res.send('<h1>Hello Express Web App!</h1>');
});

app.listen(PORT,HOST, ()=>{
    process.stdout.write(`Listen on ${HOST}:${PORT}`);
});