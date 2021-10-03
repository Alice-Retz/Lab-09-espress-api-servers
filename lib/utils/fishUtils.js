import fetch from 'node-fetch';

const rootAPIUrl = 'https://acnhapi.com/v1/fish';

export const fetchFish = async (id) => {
  const fishResponseData = await fetch(`${rootAPIUrl}/${id}`);
  const fish = await fishResponseData.json();
  return {
    name: fish.name['name-USen'],
    collected: 'false',
  };
};
