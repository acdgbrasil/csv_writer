import { MySQLConfigSingleton } from "./mysqlSingleton"
import { DatabaseService } from "../service"
import 'dotenv/config'

function createConfig(){
    if(!process.env.DATABASE_USER) throw new Error('DATABASE_USER not found in .env')
    if(!process.env.DATABASE_PASSWORD) throw new Error('DATABASE_USER not found in .env')
    const db = new DatabaseService()
    MySQLConfigSingleton.getInstance().configureDatabase('localhost', process.env.DATABASE_USER, process.env.DATABASE_PASSWORD)
}

function createDatabase(){
    MySQLConfigSingleton.getInstance().createDatabase(MySQLConfigSingleton.getInstance().getConfiguration)
}

function createConnection(){
    const dbService = new DatabaseService()
    const db = MySQLConfigSingleton.getInstance().getDatabase
    dbService.connect(db).then((res)=>{
        console.log('[DATABASE] Connected')
    }).catch((err)=>console.log(err))
}

export function mysqlInit() {
    createConfig()
    createDatabase()
    createConnection()
}
