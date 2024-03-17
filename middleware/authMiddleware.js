import {
  UnauthenticatedError,
  UnauthorizedError,
  BadRequestError,
} from '../errors/customError.js';
import { verifyJWT } from '../utils/tokenUtils.js';

// Authenticate User with cookies
export const authenticateUser = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    throw new UnauthenticatedError('Authentication invalid');
  }

  try {
    const { userId, role } = verifyJWT(token);
    const testUser = userId === '65f47667e6df876c348f7a92';
    req.user = { userId, role, testUser };
    next();
  } catch (error) {
    throw new UnauthenticatedError('Authentication invalid');
  }
};

// Authorize Admin Permissions
export const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new UnauthorizedError('Unauthorized to access this route');
    }
    next();
  };
};

// Check if the user is a test user
export const checkforTestUser = (req, res, next) => {
  console.log(req.user.testUser);
  if (req.user.testUser) {
    throw new BadRequestError('Demo User. Read Only!');
  }
  next();
};
