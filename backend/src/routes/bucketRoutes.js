import express from 'express';
import { getBucketList, addToBucketList, removeFromBucketList } from '../controllers/bucketController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .get(protect, getBucketList)
  .post(protect, addToBucketList);

router.route('/:id')
  .delete(protect, removeFromBucketList);

export default router;
