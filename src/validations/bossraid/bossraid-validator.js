import Joi from 'joi';

const endBossRaid = {
  body: Joi.object({
    userId: Joi.number().required(),
    raidRecordId: Joi.number().required(),
    isSolved: Joi.boolean().required(),
  }),
};

export default { endBossRaid };
