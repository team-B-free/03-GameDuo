import message from '../../utils/response-message.js';
import statusCode from '../../utils/status-code.js';
import { response, errResponse } from '../../utils/response.js';
import User from '../../models/user.js';

/**
 * @author 강채현
 * @version 1.0 (DB) 유저 회원가입
 * @returns {array<number, response>} response 또는 errResponse 객체
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

export default {
  signUp,
};
