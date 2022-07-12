import { response, errResponse } from "../../utils/response.js";
import statusCode from '../../utils/status-code.js';
import message from '../../utils/response-message.js';
import BossRaid from '../../models/bossraid.js';


const bossRaidEnter = async (userId, level) => {
    try {
        const bossRaid = await BossRaid.create({
            user_id: userId,
            level,
            canEnter: false,
        });

        const data = {
            isEntered: false,
            raidRecordId: bossRaid.id,
        };
        return [statusCode.CREATED, response(statusCode.CREATED, message.SUCCESS, data)];
    } catch (err) {
        console.error(err);
        return [
            statusCode.INTERNAL_SERVER_ERROR, errResponse(statusCode.DB_ERROR, message.INTERNAL_SERVER_ERROR)
        ];
    }
};

export default {
    bossRaidEnter,
};