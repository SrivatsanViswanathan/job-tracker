import { StatusCodes } from 'http-status-codes';

// Not Found (404)
export class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NotFoundError';
    this.StatusCodes = StatusCodes.NOT_FOUND;
  }
}

// Bad Request (400)
export class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.name = 'BadRequestError';
    this.StatusCodes = StatusCodes.BAD_REQUEST;
  }
}

// Unauthorized (401)
export class UnauthenticatedError extends Error {
  constructor(message) {
    super(message);
    this.name = 'UnauthenticatedError';
    this.StatusCodes = StatusCodes.UNAUTHORIZED;
  }
}

// Forbidden (403)
export class UnauthorizedError extends Error {
  constructor(message) {
    super(message);
    this.name = 'UnauthorizedError';
    this.StatusCodes = StatusCodes.FORBIDDEN;
  }
}
