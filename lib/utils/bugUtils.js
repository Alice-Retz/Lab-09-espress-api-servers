import fetch from 'node-fetch';

const rootAPIUrl = 'https://acnhapi.com/v1/bugs';

export const fetchBug = async (id) => {
  const bugResponseData = await fetch(`${rootAPIUrl}/${id}`);
  const bug = await bugResponseData.json();
  return {
    name: bug.name['name-USen'],
    collected: 'false',
  };
};
