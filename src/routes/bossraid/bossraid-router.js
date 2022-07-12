import { Router } from 'express';
const router = Router();
import bossraidController from '../../controllers/bossraid/bossraid-controller.js';

router.post('/enter', bossraidController.bossRaidEnter);

export default router;
