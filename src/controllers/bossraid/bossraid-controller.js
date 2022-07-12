import statusCode from './../../utils/status-code.js';
import message from './../../utils/response-message.js';
import bossRaidService from '../../services/bossraid/bossraid-service.js';

const bossRaidEnter = async (req, res, next) => {
  const { userId, level } = req.body;

  const [statusCode, result] = await bossRaidService.bossRaidEnter(userId, level);

  return res.status(statusCode).json(result);
};

export default {
  bossRaidEnter,
};
