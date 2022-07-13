import moment from 'moment';
import bossRaidService from '../../services/bossraid/bossraid-service.js';

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
  endBossRaid,
};
