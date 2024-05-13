export class MySQLConfig {
    private host:string  
    private user:string
    private password:string

    constructor(host:string, user:string, password:string) {
        this.host = host
        this.user = user
        this.password = password
    }

    public getHost(): string {
        return this.host
    }

    public getUser(): string {
        return this.user
    }

    public getPassword(): string {
        return this.password
    }
}


