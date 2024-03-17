import { Router } from 'express';

// Custom Imports
import { login, register, logout } from '../controllers/authController.js';
import {
  validateLoginUser,
  validateRegisterUser,
} from '../middleware/validationMiddleware.js';

const router = Router();

router.route('/register').post(validateRegisterUser, register);
router.route('/login').post(validateLoginUser, login);
router.route('/logout').get(logout);

export default router;
