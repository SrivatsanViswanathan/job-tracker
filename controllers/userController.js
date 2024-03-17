import { StatusCodes } from 'http-status-codes';
import cloudinary from 'cloudinary';
import { promises as fs } from 'fs';

// Custom Imports
import User from '../models/UserModel.js';
import Job from '../models/jobModel.js';

// Get Current User
export const getCurrentUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  const userWithoutPassword = user.toJSON();
  return res
    .status(StatusCodes.OK)
    .json({ message: 'Successful', user: userWithoutPassword });
};

// Application statistics
export const getApplicationStats = async (req, res) => {
  const users = await User.countDocuments();
  const jobs = await Job.countDocuments();
  return res.status(StatusCodes.OK).json({ users: users, jobs: jobs });
};

// Update User
export const updateUser = async (req, res) => {
  const newUser = { ...req.body };
  delete newUser.password;
  if (req.file) {
    const response = await cloudinary.v2.uploader.upload(req.file.path);
    await fs.unlink(req.file.path);
    newUser.avatar = response.secure_url;
    newUser.avatarPublicId = response.public_id;
  }
  const updatedUser = await User.findByIdAndUpdate(req.user.userId, newUser);
  if (req.file && updatedUser.avatarPublicId) {
    console.log('sss');
    await cloudinary.v2.uploader.destroy(updatedUser.avatarPublicId);
  }
  return res.status(StatusCodes.OK).json({ message: 'Updated user' });
};
