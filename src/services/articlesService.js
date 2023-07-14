import axios from 'axios';

export const fetchArticlesData = async (url, params) => {
  try {
    const filteredParams = Object.fromEntries(
      Object.entries(params).filter(([_key, value]) => value !== undefined && value !== ''),
    );

    const response = await axios.get(url, { params: filteredParams });

    if (response.status !== 200) {
      throw new Error('Request failed');
    }

    const data = response.data;

    if (data.status === 'error') {
      throw new Error(data.message);
    }

    return data.articles;
  } catch (error) {
    throw new Error(error.message);
  }
};
