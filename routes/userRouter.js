import { Router } from 'express';

// Custom Imports
import {
  getApplicationStats,
  getCurrentUser,
  updateUser,
} from '../controllers/userController.js';
import { validateUpdateUserInput } from '../middleware/validationMiddleware.js';
import {
  authorizePermissions,
  checkforTestUser,
} from '../middleware/authMiddleware.js';
import upload from '../middleware/multerMiddleware.js';
const router = Router();

router.route('/current-user').get(getCurrentUser);
router
  .route('/admin/app-stats')
  .get(authorizePermissions('admin'), getApplicationStats);

router
  .route('/update-user')
  .patch(
    checkforTestUser,
    upload.single('avatar'),
    validateUpdateUserInput,
    updateUser
  );
// router.patch(
//   '/update-user',
//   upload.single('avatar'),
//   validateUpdateUserInput,
//   updateUser
// );
export default router;
