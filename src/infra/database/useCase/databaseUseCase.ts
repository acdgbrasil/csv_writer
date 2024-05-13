import { MySQLConfig } from "../mysql/mysql.config";

export interface DatabaseUseCase {
    connect(config:any): Promise<string| Error>;
    verifyConnection(connection:any): Promise<string| Error>;
    disconnect(connection:any): Promise<string| Error>;
    verifyConnection(connection:any): Promise<string| Error>;
}