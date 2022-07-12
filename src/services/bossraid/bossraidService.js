import Bossraid from '../../models/bossraid.js';
//import { logger } from '../../config/winston.js';
import statusCode from '../../utils/status-code.js';
import message from '../../utils/response-message.js';
import { errResponse, response } from '../../utils/response.js';

const bossraidInfo = async (req) => {
  /**
   * @author 박성용
   * @version 1.0 22.07.12 보스레이드 정보 조회 기능
   *
   */
  try {
    let bossraidInfo = await Bossraid.findAll({
      where: { user_id: 3 },
      raw: true,
    });
    let canEnter, enteredUserId;

    for (let key in bossraidInfo) {
      enteredUserId = bossraidInfo[key].enteredUserId;
      // 현재 입장한 유저가 없으면 입장 가능
      if (enteredUserId === null) {
        canEnter = bossraidInfo[key]['canEnter'] = 1;
      } else {
        canEnter = bossraidInfo[key]['canEnter'] = 0;
      }
    }
    let result = {
      canEnter: canEnter,
      enteredUserId: enteredUserId,
    };

    // 현재 진행중인 레이드가 있으면 여부는 무조건 0(N)을 보낸다

    let data = result;
    // 성공시
    return response(statusCode.OK, message.SUCCESS, data);
  } catch (err) {
    // logger.cause();
    // throw new Error('에러 발생', { cause: err });
    console.log(err);
  }
};

export default {
  bossraidInfo,
};
