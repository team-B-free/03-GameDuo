import { Router } from 'express';
import { validate } from 'express-validation';
const router = Router();
import bossraidController from '../../controllers/bossraid/bossraid-controller.js';
import bossRaidValidator from '../../validations/bossraid/bossraid-validator.js';

router.post('/enter', validate(bossRaidValidator.bossRaidEnter), bossraidController.bossRaidEnter);

export default router;
