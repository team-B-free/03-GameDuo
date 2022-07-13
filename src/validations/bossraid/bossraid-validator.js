import Joi from 'joi';

/**
 * @author 김영우
 * @version 1.0 보스레이드 시작 body 검증
 */
const enterBossRaid = {
  body: Joi.object({
    userId: Joi.number().required(),
    level: Joi.number().required(),
  }),
};

export default {
  enterBossRaid,
};
