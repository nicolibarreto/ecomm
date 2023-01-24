import docs from 'swagger-ui-express'; 
import {app} from './app.js';
import apidocs from  './../api-docs.json' assert { type: "json"}

app.use("/docs", docs.serve, docs.setup(apidocs));

app.listen(3000, function () {
    console.log('accounts server is running');
});