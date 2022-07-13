import moment from 'moment';
import statusCode from './../../utils/status-code.js';
import message from './../../utils/response-message.js';
import bossRaidService from '../../services/bossraid/bossraid-service.js';

const test = (req, res) => {
  res.status(statusCode.OK).send(message.SUCCESS);
};

const endBossRaid = async (req, res) => {
  const reqTime = moment().format('YYYY-MM-DD HH:mm:ss');
  const { userId, raidRecordId: bossRaidRecordId, isSolved } = req.body;

  const [statusCode, result] = await bossRaidService.endBossRaid(
    userId,
    bossRaidRecordId,
    isSolved,
    reqTime,
  );

  return res.status(statusCode).send(result);
};

export default {
  test,
  endBossRaid,
};
