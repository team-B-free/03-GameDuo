import statusCode from './../../utils/status-code.js';
import message from './../../utils/response-message.js';
import bossraidService from '../../services/bossraid/bossraidService.js';

const getBossraidInfo = async (req, res) => {
  /**
   * @author 박성용
   * @version 1.0 22.07.12 보스레이드 정보 조회 기능
   *
   */
  try {
    const bossraiInfoData = await bossraidService.bossraidInfo(req);
    return res.status(bossraiInfoData.status).send(bossraiInfoData);
  } catch (err) {
    console.log(err);
    //throw new Error('에러 발생', { cause: err });
  }
};

export default {
  getBossraidInfo,
};
