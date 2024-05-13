import { CODE, ERROR_TYPE } from "./errorEnum";

//{code:'FAILURE',message: 'Intern error, try again',errorType: 'INTERN_ERROR',errorCode: 500,error: e}

export class ResponseHandle {
    static nameOfError(errorType: ERROR_TYPE) {
        return ERROR_TYPE[errorType]
    }
    static generateReturn(code: CODE, message: string, responseTitle: string, statusCode: number, response?: any, errorType?: ERROR_TYPE) {
        if(errorType) return { code: code, message: message, responseTitle: responseTitle, statusCode: statusCode, response: response, errorName:this.nameOfError(errorType), errorType: errorType?.valueOf() }
        return { code: code, message: message, responseTitle: responseTitle, statusCode: statusCode, response: response }
    }

    static generateReturnToString(response: any) {
        return JSON.stringify(response)
    }
}