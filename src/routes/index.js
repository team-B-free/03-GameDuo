import { Router } from 'express';
const router = Router();
import userRouter from './user/user-router.js';
import bossRaidRouter from './bossraid/bossraid-router.js';
import bossRaidRecordRouter from './bossraid-record/bossraid-record-router.js';

router.use('/user', userRouter);
router.use('/bossraid', bossRaidRouter);
router.use('/bossraid-record', bossRaidRecordRouter);

export default router;
