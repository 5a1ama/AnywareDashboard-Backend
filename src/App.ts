//mongoDB
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();
//express
import express, { Express } from 'express';
const app: Express = express();
const port = process.env.PORT || 8000;
//models
import quizesModel from './Models/quizes';
import announcementsModel from './Models/announcements';
import usersModel from './Models/users';
//routers
import quizesRouter from './Routes/quizesRouter';
import announcementsRouter from './Routes/announcementsRouter';
import usersRouter from './Routes/usersRouter'
//usages
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';



async function connect()
{
    try
    {
        await mongoose.connect(process.env.MONGODB_URL as any);
        console.log("Connected to MongoDB");
    }
    catch(error)
    {
        console.error(error);
    }
}

connect();

//for development
//app.use(cors());
//for production
app.use(cors({
    origin: 'https://student-dashboard-frontend-phi.vercel.app', 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],}));
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json({limit:'20mb'}));
app.use("/quizes",quizesRouter);
app.use("/announcements",announcementsRouter);
app.use("/users",usersRouter);

app.options('*', cors({
    origin: 'https://student-dashboard-frontend-phi.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }));

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
