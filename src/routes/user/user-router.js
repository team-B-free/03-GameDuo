import { Router } from 'express';
import userController from '../../controllers/user/user-controller.js';

const router = Router();

router.post('/', userController.signUp); // 유저 생성

export default router;
