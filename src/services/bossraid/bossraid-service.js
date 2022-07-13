import { response, errResponse } from '../../utils/response.js';
import statusCode from '../../utils/status-code.js';
import message from '../../utils/response-message.js';
import Bossraid from '../../models/bossraid.js';
import BossraidRecord from '../../models/bossraid-record.js';
import { logger } from '../../config/winston.js';
import getStaticData from '../../modules/static-data.js';
import checkExpired from '../../modules/time.js';

const endBossRaid = async (userId, bossRaidRecordId, isSolved, reqTime) => {
  try {
    let staticData = await getStaticData();
    staticData = JSON.parse(staticData);

    const { bossRaidLimitSeconds } = staticData;

    const data = await BossraidRecord.findOne({
      where: {
        bossraid_id: bossRaidRecordId,
      },
      include: {
        model: Bossraid,
        attributes: ['user_id', 'level'],
      },
      attributes: ['bossraid_id', 'enter_time', 'end_time'],
    });

    const bossRaidRecordUserId = data.BOSSRAID['user_id'];
    if (bossRaidRecordUserId !== userId) {
      return [
        statusCode.BAD_REQUEST,
        errResponse(statusCode.BAD_REQUEST, message.NOT_USER_RAIDRECORDID),
      ];
    }

    const endTime = data.getDataValue('end_time');
    if (endTime) {
      return [
        statusCode.BAD_REQUEST,
        errResponse(statusCode.BAD_REQUEST, message.ALREADY_END_RAIDRECORDID),
      ];
    }

    const enterTime = data.getDataValue('enter_time');

    const isExpired = checkExpired(enterTime, reqTime, bossRaidLimitSeconds);
    if (isExpired) {
      return [
        statusCode.BAD_REQUEST,
        errResponse(statusCode.BAD_REQUEST, message.EXPIRED_RAIDRECORDID),
      ];
    }

    const level = data.BOSSRAID['level'];
    let score = 0;

    if (isSolved) {
      score = staticData.levels[level].score;
    }

    const allBossRiadData = await Bossraid.findAll({
      attributes: ['id'],
    });

    const bossRaidIds = allBossRiadData.map((item) => item.getDataValue('id'));

    await BossraidRecord.update(
      {
        endTime: reqTime,
        score,
      },
      {
        where: { id: bossRaidRecordId },
      },
    );

    await Bossraid.update(
      {
        canEnter: true,
        enteredUserId: null,
      },
      {
        where: {
          id: bossRaidIds,
        },
      },
    );

    return [statusCode.OK, response(statusCode.NO_CONTENT, message.SUCCESS)];
  } catch (error) {
    logger.error(`endBossRaid Service Err: ${error}`);
    return [
      statusCode.DB_ERROR,
      errResponse(statusCode.DB_ERROR, message.INTERNAL_SERVER_ERROR),
    ];
  }
};

export default { endBossRaid };
