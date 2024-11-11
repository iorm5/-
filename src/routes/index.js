import { Router } from 'express';
import userRoutes from './userRoutes.js';
import healthRoutes from './healthRoutes.js';

const router = Router();

router.use('/users', userRoutes);
router.use('/health', healthRoutes);

export default router;