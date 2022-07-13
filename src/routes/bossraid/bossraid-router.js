import { Router } from 'express';
import { validate } from 'express-validation';
import bossraidController from '../../controllers/bossraid/bossraid-controller.js';
import bossraidValidator from '../../validations/bossraid/bossraid-validator.js';
const router = Router();

router.get('/', bossraidController.test);
router.patch(
  '/end',
  validate(bossraidValidator.endBossRaid),
  bossraidController.endBossRaid,
);

export default router;
