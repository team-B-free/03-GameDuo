import statusCode from './../../utils/status-code.js';
import message from './../../utils/response-message.js';

const test = (req, res) => {
  res.status(statusCode.OK).send(message.SUCCESS);
};

export default {
  test,
};
