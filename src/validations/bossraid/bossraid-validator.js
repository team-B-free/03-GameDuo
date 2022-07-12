import Joi from 'joi';

const bossRaidEnter = {
    body: Joi.object({
        userId: Joi.number().required(),
        level: Joi.number().required(),
    }),
};

export default {
    bossRaidEnter,
};