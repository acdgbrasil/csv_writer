import { CODE } from "../../../tools/errorEnum";
import { ResponseHandle } from "../../../tools/returnHandle";
import { MySQLConfig } from "./mysql.config";
import {MysqlError, createConnection,Connection} from 'mysql'

export function configureDatabase(host:string,user:string,password:string) {
    return new MySQLConfig(host, user, password)
}

export function createDatabase(cofig: MySQLConfig) {
    return createConnection({host:cofig.getHost(), user:cofig.getUser(), password:cofig.getPassword()})
}

export function connect(connection: Connection,callback?: (err: MysqlError, ...args: any[]) => void) {
    connection.connect(callback)
}

export function verifyConnection(connection: Connection,callback:(err: MysqlError) => void) {
    connection.ping(callback)
}

export function disconnect(connection: Connection,callback?: (err?: MysqlError) => void) {
    connection.end(callback)
}


export async function showAllDataBases(connection: Connection){
    const allDatabasesWithOutFormat:[] = await new Promise((resolve,reject)=>{
        connection.query('SHOW DATABASES',(err,results,_)=>{
            if(err) {
                reject(err)
            }
            resolve(results)
        })
    })

    return allDatabasesWithOutFormat.map((database:any)=>{
        return database.Database
    })

}

export async function enterInToDatabase(connection:Connection,nameOfDatabase:string){
    const queryEnterOneDatabase = `USE ${nameOfDatabase};`
    const enterDatabase = await new Promise((resolve,reject)=>{
        connection.query(queryEnterOneDatabase,(err,results,fields)=>{
            if(err) {
                reject(err)
            }
            resolve(results)
        })
    })
}

export async function createTableForListOfObjects(connection: Connection,nameOfDatabase:string) {
    

    // const enterDatabase = await new Promise((resolve,reject)=>{
    //     connection.query(queryEnterOneDatabase,(err,results,fields)=>{
    //         if(err) {
    //             reject(err)
    //         }
    //         resolve(results)
    //     })
    // })

    // let queryOfCreateTable = `CREATE TABLE usuarios (
    //     id INT AUTO_INCREMENT PRIMARY KEY,
    //     nome VARCHAR(255) NOT NULL,
    //     email VARCHAR(255) UNIQUE NOT NULL,
    //     data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP
    // );
    // `
    // const createTable = await new Promise((resolve,reject)=>{    
    //     connection.query(queryOfCreateTable,(err,results,fields)=>{
    //         if(err) {
    //             reject(err)
    //         }
    //         resolve(results)
    //     })
    // })


}