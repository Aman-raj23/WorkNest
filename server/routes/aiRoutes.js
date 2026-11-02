import express from 'express';
import {
  planProject,
  decomposeTask,
  analyzeRisks,
  copilotChat,
} from '../controllers/aiController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.post('/plan', protect, planProject);
router.post('/breakdown', protect, decomposeTask);
router.post('/risk-analysis', protect, analyzeRisks);
router.post('/copilot', protect, copilotChat);

export default router;
