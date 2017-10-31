import withQuery from 'with-query';

export const getUsers = async (id) => {
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
  return await resp.json();
};
