export const countryOptions = [
  'ae',
  'ar',
  'at',
  'au',
  'be',
  'bg',
  'br',
  'ca',
  'ch',
  'cn',
  'co',
  'cu',
  'cz',
  'de',
  'eg',
  'fr',
  'gb',
  'gr',
  'hk',
  'hu',
  'id',
  'ie',
  'il',
  'in',
  'it',
  'jp',
  'kr',
  'lt',
  'lv',
  'ma',
  'mx',
  'my',
  'ng',
  'nl',
  'no',
  'nz',
  'ph',
  'pl',
  'pt',
  'ro',
  'rs',
  'ru',
  'sa',
  'se',
  'sg',
  'si',
  'sk',
  'th',
  'tr',
  'tw',
  'ua',
  'us',
  've',
  'za',
];

export const categoryOptions = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

export const sortByOptions = ['relevancy', 'popularity', 'publishedAt'];

export const defaultOptions = {
  apiKey: import.meta.env.VITE_API_KEY,
  //apiKey: '3035d923e07148e09e8f54d3a92640ab',
  q: '',
  searchIn: 'all',
  sources: [],
  domains: '',
  excludeDomains: '',
  language: '',
  pageSize: 100,
  page: 1,
};

export const everythingDefaultOptions = {
  url: 'https://newsapi.org/v2/everything',
  sortBy: 'relevancy',
};

export const topHeadlinesDefaultOptions = {
  url: 'https://newsapi.org/v2/top-headlines',
  country: 'us',
  category: '',
  sources: [],
  q: '',
  pageSize: 20,
  page: 1,
};
