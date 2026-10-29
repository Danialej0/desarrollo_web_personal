// clase para manejar errores http

class HttpError extends Error{ 
    constructor(status, message){
        super(message);
        this.status = status;
    }
}

module.exports = HttpError;