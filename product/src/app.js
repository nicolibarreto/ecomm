import express from 'express';
import { router } from './routes.js';
import bodyParser from 'body-parser';

export const app = express();
app.use(bodyParser.json());
app.use(router);