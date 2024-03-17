import { Router } from 'express';

// Custom Imports
import {
  getAllJobs,
  getSingleJob,
  createJob,
  updateJob,
  deleteJob,
  showStats,
} from '../controllers/jobController.js';
import {
  validateJobInput,
  validateIdParam,
} from '../middleware/validationMiddleware.js';
import { checkforTestUser } from '../middleware/authMiddleware.js';

const router = Router();

router
  .route('/')
  .get(getAllJobs)
  .post(checkforTestUser, validateJobInput, createJob);

router.route('/stats').get(showStats);

router
  .route('/:id')
  .get(validateIdParam, getSingleJob)
  .patch(checkforTestUser, validateJobInput, validateIdParam, updateJob)
  .delete(checkforTestUser, validateIdParam, deleteJob);

export default router;
