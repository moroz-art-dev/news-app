export const fetchArticlesData = async (url, _params) => {
  try {
    const response = await fetch(`/demo/${getUrlType(url)}.json`);


    if (!response.ok) {
      throw new Error('Request failed');
    }

    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getUrlType = (url) => {
  if (url === 'https://newsapi.org/v2/everything') {
    return 'everything';
  } else if (url === 'https://newsapi.org/v2/top-headlines') {
    return 'topHeadlines';
  } else {
    throw new Error('Invalid URL');
  }
};
