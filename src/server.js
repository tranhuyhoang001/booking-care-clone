import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from './config/view-engine';
import initWebRoutes from './routes/web';
require('dotenv').config();
const connectDB = require('./config/connect-db');

const app = express();

//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

connectDB();

const port = process.env.PORT || 6969;
//Port === undefined => port = 6969

app.listen(port, () => {
  //callback
  console.log('Backend Nodejs is runing on the port : ' + port);
});
