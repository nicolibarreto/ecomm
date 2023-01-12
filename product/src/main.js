import express from 'express';
import { router } from './routes.js';
import docs from 'swagger-ui-express'; 
import apidocs from '../api-docs.json' assert{type:'json'};
import bodyParser from 'body-parser';
import client from './repositories/databaseClients.js';


const app = express();
app.use(bodyParser.json());
app.use(router);
app.use("/docs", docs.serve,docs.setup(apidocs));

app.listen(3000, function () {
    console.log('product server is running');
});