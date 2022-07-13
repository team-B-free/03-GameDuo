import moment from 'moment';

const checkExpired = (enterTime, reqTime, bossRaidLimitSeconds) => {
  enterTime = moment(enterTime, 'YYYY-MM-DD HH:mm:ss')
    .add(9, 'h')
    .format('YYYY-MM-DD HH:mm:ss');

  const deadline = moment
    .utc(enterTime)
    .add(bossRaidLimitSeconds, 's')
    .format('YYYY-MM-DD HH:mm:ss');

  if (reqTime >= deadline) {
    return true;
  }
  return false;
};

export default checkExpired;
