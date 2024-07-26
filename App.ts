//mongoDB
import mongoose from 'mongoose';
//dotenv
import dotenv from 'dotenv'
dotenv.config();
//express
import express, { Express } from 'express';
const app: Express = express();
const port = process.env.PORT || 8000;
//models
import quizesModel from './src/Models/quizes';
import announcementsModel from './src/Models/announcements';
import usersModel from './src/Models/users';
//routers
import quizesRouter from './src/Routes/quizesRouter';
import announcementsRouter from './src/Routes/announcementsRouter';
import usersRouter from './src/Routes/usersRouter'
//usages
import bodyParser from 'body-parser';
import cors from 'cors';


// Connect to mongoDB
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

// Enable CORS for development
app.use(cors());

// Body parsing middleware
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json({limit:'20mb'}));

// Route handlers
app.use("/",announcementsRouter);
app.use("/",quizesRouter);
app.use("/",usersRouter);

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
