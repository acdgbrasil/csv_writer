import { MySQLConfig } from "../../src/infra/database/mysql/mysql.config"
import { MySQLConfigSingleton } from "../../src/infra/database/mysql/mysqlSingleton"
import { DatabaseService } from "../../src/infra/database/service"
import { Connection } from "mysql"
import 'dotenv/config'

describe('MYSQL TESTS FOR CREATION AND CONNECTIOS', () => {
    var user: string | undefined
    var password: string | undefined
    const dbService = new DatabaseService()
    var db: Connection

    beforeAll(()=>{
        user = process.env.DATABASE_USER
        password = process.env.DATABASE_PASSWORD
    })

    test('TEST environment variables', ()=>{
        expect(user).toBeDefined()
        expect(password).toBeDefined()
    })
    
    test('Should create a database configuration', ()=>{
        MySQLConfigSingleton.getInstance().configureDatabase('localhost', user!, password!)
        const config = new MySQLConfig('localhost', user!, password!)
        expect(config).toEqual(MySQLConfigSingleton.getInstance().getConfiguration)
    })

    test('Should create a db', ()=>{
        MySQLConfigSingleton.getInstance().createDatabase(MySQLConfigSingleton.getInstance().getConfiguration)
        db = MySQLConfigSingleton.getInstance().getDatabase
        expect(db.config.user).toEqual(user)
        expect(db.config.password).toEqual(password)
    })

    test('Should connect to the database', async ()=>{
        try{
            const dbConnected = await dbService.connect(db)
        
            const response = JSON.parse(dbConnected as string)
            expect(response.code).toBe(200)
            expect(response.message).toBe('Connected to database')
            expect(response.type).toBe('DATABASE_CONNECTION_SUCESS')
            
        }catch(err){
            expect(err).toBeInstanceOf(Error)
        }
    })

    test('Should check status in DB', async ()=>{
        try{
            const dbConnected = await dbService.verifyConnection(db)
            expect(dbConnected).toBe('Connected')
        }catch(err){
            expect(err).toBeInstanceOf(Error)
        }
    })   

    afterAll(()=>{
        db.end()
    })

})