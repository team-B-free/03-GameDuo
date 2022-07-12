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
    const user = await User.findOne({
      where: { id: userId },
      include: [
        {
          model: Bossraid,
          include: [
            {
              model: BossraidRecord,
            },
          ],
        },
      ],
    });

    if (user === null) {
      return [
        statusCode.NO_CONTENT,
        response(statusCode.NO_CONTENT, message.NO_CONTENT),
      ];
    } else {
      return [statusCode.OK, response(statusCode.OK, message.SUCCESS, user)];
    }
  } catch (error) {
    return [
      statusCode.DB_ERROR,
      errResponse(statusCode.DB_ERROR, message.DB_ERROR),
    ];
  }
};

export default {
  signUp,
  userCheck,
};
