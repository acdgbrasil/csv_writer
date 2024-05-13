import { Connection } from "mysql"
import { DatabaseUseCase } from "../useCase/databaseUseCase"
import { MySQLConfig } from "./mysql.config"
import { createDatabase } from "./mysqlDto"

export class MySQLConfigSingleton{
    private static instance: MySQLConfigSingleton
    private config: MySQLConfig
    private database: Connection  
    private constructor(){
        this.config = new MySQLConfig('','','')
        this.database = {} as Connection
    }
    
    public static getInstance(): MySQLConfigSingleton {
        if(!this.instance){
            MySQLConfigSingleton.instance = new MySQLConfigSingleton()
        }
        return MySQLConfigSingleton.instance
    }

    public configureDatabase(host:string,user:string,password:string): MySQLConfig {
        try{
            // Configure database
            const config = new MySQLConfig(host, user, password)
            this.config = config
            return config
        }catch(e){
            throw {message: "Error configuring database"}
        }
    }
    
    get getConfiguration(): MySQLConfig {
        return this.config
    }

    get getDatabase(): Connection {
        return this.database
    }

    createDatabase(cofig: MySQLConfig) {
        const database = createDatabase(cofig)
        this.database = database
    }

    
}