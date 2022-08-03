class ErrorPage extends Error {
  constructor(message) {
    super(message);
    this.name = 'ErrorPage';
    this.message = message;
  }
}

export default ErrorPage;
