import { Router } from 'express';
const router = Router();
import bossRaidController from '../../controllers/bossraid/bossraid-controller.js';

router.get('/', bossRaidController.getBossRaidInfo);

export default router;
