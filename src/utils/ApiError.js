class ApiError extends Error {
  constructor(
    statusCode,
    message = "Sothing went Wrong",
    errors = [],
    stack = ""
  ) {
    super(message);
    (this.statusCode = statusCode)((thsi.data = null))(
      (this.message = message)
    )((this.sucess = false))((this.errors = errors));
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constuctor);
    }
  }
}
export { ApiError };
