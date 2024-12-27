class ErrorHandler extends Error {

    //Constructor for ErrorHandler  
    constructor(message,statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

//Defining a middleware for exporting the errors
export const errorMiddleware = (err,req,res,next) => {
    err.message = err.message || "Internal Server Error";
    err.statusCode = err.statusCode || 500;

    return res.status(err.statusCode).json({
        success: false,
        message: err.message,

    });
};

export default ErrorHandler;

