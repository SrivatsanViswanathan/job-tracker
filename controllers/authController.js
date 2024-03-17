import { StatusCodes } from 'http-status-codes';

// Custom Imports
import User from '../models/UserModel.js';
import { comparePassword, hashPassword } from '../utils/passwordUtils.js';
import { UnauthenticatedError } from '../errors/customError.js';
import { createJWT } from '../utils/tokenUtils.js';

// Register User
export const register = async (req, res) => {
  // Make first account an admin account
  const isFirstAccount = (await User.countDocuments()) === 0;
  if (isFirstAccount) {
    req.body.role = 'admin';
  } else {
    req.body.role = 'user';
  }

  // Hash password
  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;

  const user = await User.create(req.body);
  return res
    .status(StatusCodes.CREATED)
    .json({ message: 'User successfully created' });
};

// Login
export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });
  if (!user) {
    throw new UnauthenticatedError('Invalid Credentials');
  }

  const isPasswordCorrect = await comparePassword(password, user.password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError('Invalid Credentials');
  }

  // JSON Web Token
  const token = createJWT({ userId: user._id, role: user.role });
  const oneDay = 1000 * 60 * 60 * 24;
  res.cookie('token', token, {
    httpOnly: true,
    expired: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === 'production',
  });
  return res.status(StatusCodes.OK).json({ message: 'User logged in' });
};

// Logout
export const logout = async (req, res) => {
  res.cookie('token', 'logout', {
    httpOnly: true,
    expired: new Date(Date.now()),
  });
  return res.status(StatusCodes.OK).json({ message: 'User logged out' });
};
