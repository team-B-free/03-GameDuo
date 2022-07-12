import { Router } from 'express';
const router = Router();
import bossraidController from '../../controllers/bossraid/bossraid-controller.js';

router.get('/', bossraidController.test);

export default router;
