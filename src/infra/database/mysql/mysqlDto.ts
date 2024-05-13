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