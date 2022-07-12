import { Router } from 'express';
const router = Router();
import bossraidRecordController from '../../controllers/bossraid-record/bossraid-record-controller.js';

router.get('/', bossraidRecordController.test);

export default router;
