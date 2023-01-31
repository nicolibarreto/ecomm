import docs from 'swagger-ui-express'; 
import apidocs from '../api-docs.json' assert{type:'json'};
import { app } from './app.js';

app.use("/docs", docs.serve,docs.setup(apidocs));

app.listen(3000, function () {
    console.log('product server is running');
});