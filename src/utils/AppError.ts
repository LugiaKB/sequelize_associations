interface AppErrorArgs {
    name?: string,
    message: string,
}

export default class AppError extends Error {
    httpCode: number;

    constructor(message: string, httpCode: number = 500, name: string = "Error") {
        super(message);
        
        this.name = name;
        this.httpCode = httpCode;
    }

    getHttpCode(): number {
        return this.httpCode;
    }

    getError(): AppErrorArgs {
        return {
            name: this.name,
            message: this.message,
        }
    }
}