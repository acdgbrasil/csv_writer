import { CODE, ERROR_TYPE } from "../../tools/errorEnum";
import { ResponseHandle } from "../../tools/returnHandle";
import { MySQLConfig } from "./mysql/mysql.config";
import { createDatabase,connect } from "./mysql/mysqlDto";
import { MySQLConfigSingleton } from "./mysql/mysqlSingleton";
import { DatabaseUseCase } from "./useCase/databaseUseCase";

export class DatabaseService implements DatabaseUseCase{


    createInternDatabase(connection: any, nameOfDatabase: string) {
        throw new Error("Method not implemented.");
    }
    
    async connect(connection:any): Promise<string| Error> {
        try {
            connect(connection,(err)=>{
                if(err){
                    throw err
                } 
            })
            const response = ResponseHandle.generateReturn(CODE.SUCESS,'Connected to database','DATABASE_CONNECTION_SUCESS',200)
            const responseString = ResponseHandle.generateReturnToString(response)
            return responseString
        }catch(err) {
            throw ResponseHandle.generateReturn(CODE.ERROR,'Intern error in process of something of database','DATABASE_ERROR',500,err,ERROR_TYPE.DATABASE_FAILURE_INTERN_PROCESS)
        }
    }
    verifyConnection(connection:any): Promise<string| Error> {
        throw new Error("Method not implemented.");
    }
    disconnect(connection:any): Promise<string| Error> {
        throw new Error("Method not implemented.");
    }


}