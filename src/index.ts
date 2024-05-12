import express,{Express} from 'express';

const app:Express = express();
const port = 3000 || process.env.PORT;

app.get('',(req:express.Request,res:express.Response)=>{
    res.send("Hello world")
})



app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})