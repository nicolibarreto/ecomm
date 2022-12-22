import express from 'express';
import { router } from './routes.js';

import docs from 'swagger-ui-express'; 
import apidocs from '../api-docs.json' assert{type:'json'};

const app = express();
app.use(express.json());
app.use(router);
app.use("/docs", docs.serve,docs.setup(apidocs));

app.listen(3000, function () {
    console.log('product server is running');
});