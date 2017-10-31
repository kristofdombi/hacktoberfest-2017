import withQuery from 'with-query';

export const getUsers = async (id) => {
  try {
    const resp = await fetch(
      withQuery('https://my-json-server.typicode.com/kristof0425/hacktoberfest-2017/users', id),
      {
        method: 'GET',
        'Content-Type': 'application/json',
        headers: {
          'Accept': 'application/json'
        }
      }
    );
    const results = await resp.json();
    return results;
  } catch (e) {
    throw new Error(e);
  }
};
