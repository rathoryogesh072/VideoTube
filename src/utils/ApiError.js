class ApiError extends Error {
  constructor(statusCode, message = "An error occurred",errors=[],stack="") {
    super(message);
    this.statusCode = statusCode;
    this.data=null;
    this.message = message;
    this.error = errors;
    this.success = false;

    if(stack) {
      this.stack = stack;
    }else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };