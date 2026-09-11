import express from 'express';
import { getConsent, updateConsent } from '../controllers/consentController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .get(protect, getConsent)
  .put(protect, updateConsent);

export default router;
