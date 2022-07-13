import { Router } from 'express';
import { validate } from 'express-validation';
import bossRaidController from '../../controllers/bossraid/bossraid-controller.js';
import bossRaidValidator from '../../validations/bossraid/bossraid-validator.js';
const router = Router();

router.patch(
  '/end',
  validate(bossRaidValidator.endBossRaid),
  bossRaidController.endBossRaid,
);

export default router;
