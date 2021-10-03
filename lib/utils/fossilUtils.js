import fetch from 'node-fetch';

const rootAPIUrl = 'https://acnhapi.com/v1/fossils';

export const fetchFossil = async (id) => {
  const fossilResponseData = await fetch(`${rootAPIUrl}/${id}`);
  const fossil = await fossilResponseData.json();
  return {
    name: fossil.name['name-USen'],
    collected: 'false',
  };
};
