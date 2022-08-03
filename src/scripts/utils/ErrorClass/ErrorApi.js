class ErrorApi extends Error {
  constructor(message) {
    super(message);
    this.name = 'ErrorApi';
    this.message = message;
  }
}

export default ErrorApi;
