import { Router } from 'express';
const router = Router();
import userRouter from './user/user-router.js';
import bossraidRouter from './bossraid/bossraid-router.js';
import bossraidRecordRouter from './bossraid-record/bossraid-record-router.js';

router.use('/user', userRouter);
router.use('/bossraid', bossraidRouter);
router.use('/bossraid-record', bossraidRecordRouter);

export default router;