import { Router } from 'express';
const router = Router();
import userController from '../../controllers/user/user-controller.js';

router.get('/', userController.test);

export default router;
