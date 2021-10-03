import fetch from 'node-fetch';

const rootAPIUrl = 'https://acnhapi.com/v1/art';

export const fetchArt = async (id) => {
  const artResponseData = await fetch(`${rootAPIUrl}/${id}`);
  const art = await artResponseData.json();
  return {
    name: art.name['name-USen'],
    collected: 'false',
  };
};
