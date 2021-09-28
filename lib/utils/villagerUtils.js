import fetch from 'node-fetch';

//link to api: https://acnhapi.com/v1/villagers/{villagerID}
const rootAPIUrl = 'https://acnhapi.com/v1/villagers';

export const fetchVillager = async (id) => {
  const villagerResponseData = await fetch(`${rootAPIUrl}/${id}`);
  const villager = await villagerResponseData.json();
  return villager;
};
