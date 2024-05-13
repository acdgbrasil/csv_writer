import express,{Express} from 'express';
import { mysqlInit } from './infra/database/mysql/initDatabase';

const app:Express = express();
const port = 3000 || process.env.PORT;
mysqlInit()

app.get('',(req:express.Request,res:express.Response)=>{
    res.send("Hello world")
})


app.listen(port,()=>{
    console.log(`[SERVER] Server is running on port ${port}`)
})