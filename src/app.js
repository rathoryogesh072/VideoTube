import express from 'express';
import cors from 'cors';

const app=express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true

}));
//common middleware
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));
app.use(express.static('public'));

//import routes
import healthcheck from './routes/healthcheck.routes.js';

//define routes
app.use('/api/v1/healthcheck',healthcheck);


export {app}