import express from 'express';
import { getTrips, createTrip, deleteTrip } from '../controllers/tripController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .get(protect, getTrips)
  .post(protect, createTrip);

router.route('/:id')
  .delete(protect, deleteTrip);

export default router;
