"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseHandle = void 0;
const errorEnum_1 = require("./errorEnum");
//{code:'FAILURE',message: 'Intern error, try again',errorType: 'INTERN_ERROR',errorCode: 500,error: e}
class ResponseHandle {
    static nameOfError(errorType) {
        return errorEnum_1.ERROR_TYPE[errorType];
    }
    static generateReturn(code, message, responseTitle, statusCode, response, errorType) {
        if (errorType)
            return { code: code, message: message, responseTitle: responseTitle, statusCode: statusCode, response: response, errorName: this.nameOfError(errorType), errorType: errorType === null || errorType === void 0 ? void 0 : errorType.valueOf() };
        return { code: code, message: message, responseTitle: responseTitle, statusCode: statusCode, response: response };
    }
    static generateReturnToString(response) {
        return JSON.stringify(response);
    }
}
exports.ResponseHandle = ResponseHandle;
