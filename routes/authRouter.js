import { Router } from 'express';

// Custom Imports
import { login, register, logout } from '../controllers/authController.js';
import {
  validateLoginUser,
  validateRegisterUser,
} from '../middleware/validationMiddleware.js';
import rateLimiter from 'express-rate-limit';

const router = Router();
const apiLimiter = rateLimiter({
  windowMs: 1000 * 60 * 15,
  max: 15,
  message: { message: 'IP rate limit exceeded, retry in 15 minutes' },
});

router.route('/register').post(apiLimiter, validateRegisterUser, register);
router.route('/login').post(apiLimiter, validateLoginUser, login);
router.route('/logout').get(logout);

export default router;
