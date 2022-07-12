import bossRaidService from '../../services/bossraid/bossraid-service.js';
import statusCode from './../../utils/status-code.js';
import message from './../../utils/response-message.js';

const getBossRaidInfo = async (req, res) => {
  /**
   * @author 박성용
   * @version 1.0 22.07.12 보스레이드 정보 조회 기능
   *
   */
  try {
    const bossRaidInfoData = await bossRaidService.bossRaidInfo(req);
    return res.status(bossRaidInfoData.status).send(bossRaidInfoData);
  } catch (err) {
    console.log(err);
    //throw new Error('에러 발생', { cause: err });
  }
};

const bossRaidEnter = async (req, res, next) => {
  const { userId, level } = req.body;

  const [statusCode, result] = await bossRaidService.bossRaidEnter(
    userId,
    level,
  );

  return res.status(statusCode).json(result);
};

export default {
  getBossRaidInfo,
  bossRaidEnter,
};
