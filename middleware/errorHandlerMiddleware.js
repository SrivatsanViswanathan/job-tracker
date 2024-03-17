import { StatusCodes } from 'http-status-codes';

const errorHandlerMiddleware = (err, req, res, next) => {
  const statusCode = err.StatusCodes || StatusCodes.INTERNAL_SERVER_ERROR;
  const message = err.message || 'Something went wrong. Try again later';
  res.status(statusCode).json({ message: message });
};

export default errorHandlerMiddleware;
