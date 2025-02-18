import express, { Express, Request, Response } from 'express';
import connectDB from './config/database';
import  router  from './routes/userRoute';
import path from 'path';
const app = express();
app.use(express.json());
app.set('view engine','ejs')
app.set('views', path.join(__dirname, 'views'));
const PORT = 3030;

app.use('/', router);

connectDB();
app.get('/', (req:Request, res: Response) => {
  res.render('createtask');
});

app.get("/allTask",(req:Request, res: Response)=>{
  res.render("allTasks")
})

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
