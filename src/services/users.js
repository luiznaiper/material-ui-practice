import { urlFetch } from '../constants';

const getUser = async (user) => {
  try {
    const response = await fetch(`${urlFetch}${user}`, {
      method: 'GET',
    });
    const payload = response.json();
    return payload;
  } catch (error) {
    console.log(error);
  }
};

export { getUser };
