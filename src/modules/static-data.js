import fetch from 'node-fetch';

const getStaticData = async () => {
  const s3URL =
    'https://dmpilf5svl7rv.cloudfront.net/assignment/backend/bossRaidData.json';

  const response = await fetch(s3URL, {
    method: 'GET',
  });

  const data = await response.json();

  return data.bossRaids[0];
};

export default getStaticData;
