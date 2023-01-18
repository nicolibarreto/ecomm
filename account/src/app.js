import express from 'express';
import { router } from './routes.js';

const app = express();
app.use(express.json());

app.get('/health' , (req,res) => {
    return res,send();
});

app.use(router);


export {app};



