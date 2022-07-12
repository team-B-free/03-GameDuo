import message from '../../utils/response-message.js';
import statusCode from '../../utils/status-code.js';
import { response, errResponse } from '../../utils/response.js';
import User from '../../models/user.js';
import Bossraid from '../../models/bossraid.js';
import BossraidRecord from '../../models/bossraid-record.js';

/**
 * @author 강채현
 * @version 1.0 (DB) 유저 회원가입
 * @returns {array<number, object>} statusCode, response 또는 errResponse 객체
 */
const signUp = async () => {
  try {
    await User.create();

    return [statusCode.OK, response(statusCode.OK, message.SUCCESS)];
  } catch (err) {
    return [
      statusCode.DB_ERROR,
      errResponse(statusCode.DB_ERROR, message.DB_ERROR),
    ];
  }
};

/**
 * @author 오주환
 * @version 1.0 (DB) 유저 조회
 * @params {string} 유저 id
 * @returns {array<number, object>} statusCode, response 또는 errResponse 객체
 */
const userCheck = async (userId) => {
  try {
    const record = await Bossraid.findAll({
      where: { user_id: userId },
      attributes: ['id', 'level', 'boss'],
      include: [
        {
          model: BossraidRecord,
          attributes: ['id', 'score', 'enter_time', 'end_time'],
        },
      ],
    });
    if (record.length === 0) {
      return [statusCode.OK, response(statusCode.NOT_FOUND, message.NOT_FOUND)];
    }

    const result = await recordPreprocessing(record);

    return [statusCode.OK, response(statusCode.OK, message.SUCCESS, result)];
  } catch (error) {
    return [
      statusCode.INTERNAL_SERVER_ERROR,
      errResponse(
        statusCode.INTERNAL_SERVER_ERROR,
        message.INTERNAL_SERVER_ERROR,
      ),
    ];
  }
};
/**
 * @author 오주환
 * @version 1.0 (DB) 유저 데이터 전처리
 * @params {object} 유저의 보스레이드와 보스레이드기록
 * @returns {object} 전처리된 유저의 보스레이드와 보스레이드기록
 */
const recordPreprocessing = async (recordInfo) => {
  let recordJson = JSON.parse(JSON.stringify(recordInfo));
  let data = {};
  let totalScore = 0;
  let bossRaidHistory = [];
  for (let iterator of recordJson) {
    if (iterator.BOSSRAID_RECORDs.length > 0) {
      bossRaidHistory.push(iterator.BOSSRAID_RECORDs);
    }
    for (iterator of iterator.BOSSRAID_RECORDs) {
      totalScore += iterator.score;
    }
  }
  data.totalScore = totalScore;
  data.bossRaidHistory = bossRaidHistory;
  return data;
};

export default {
  signUp,
  userCheck,
};
