import { Router } from 'express';
import { validate } from 'express-validation';
import bossRaidController from '../../controllers/bossraid/bossraid-controller.js';
import bossRaidValidator from '../../validations/bossraid/bossraid-validator.js';
const router = Router();
router.get('/', bossRaidController.getBossRaidInfo);

router.post(
  '/enter',
  validate(bossRaidValidator.bossRaidEnter),
  bossRaidController.bossRaidEnter,
);

export default router;
