import express,{Express} from 'express';
import { mysqlInit } from './infra/database/mysql/initDatabase';
import { createTableForListOfObjects } from './infra/database/mysql/mysqlDto';
import { MySQLConfigSingleton } from './infra/database/mysql/mysqlSingleton';

export const app:Express = express();
app.use(express.json())
const port = 3000 || process.env.PORT;
mysqlInit()

app.get('',(req:express.Request,res:express.Response)=>{
    createTableForListOfObjects(MySQLConfigSingleton.getInstance().getDatabase,'test')
    
    
    res.send("Hello world")
})





app.listen(port,()=>{
    console.log(`[SERVER] Server is running on port ${port}`)
})