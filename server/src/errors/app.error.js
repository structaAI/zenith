class AppError extends Error {
  constructor(message, statusCode, errorCode=null, isOperational=null) {
    super(message);

    this.statusCode = statusCode;
    this.errorCode = errorCode;
    this.isOperational = isOperational;
    this.timestamp = new Date().toISOString();

    error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;