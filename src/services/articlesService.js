import axios from 'axios';

export const fetchArticles = async (url, params) => {
  try {
    const response = await axios.get(url, { params });

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
