import express, { Express, Request, Response } from 'express';
import connectDB from './config/database';
import  router  from './routes/userRoute';
const app = express();
app.use(express.json());
const PORT = 3030;

app.use('/', router);


app.get("/",(req:Request, res: Response)=>{
    res.send("home page")
})

connectDB();
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
