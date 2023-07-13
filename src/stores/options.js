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

export const languageOptions = ['ar', 'de', 'en', 'es', 'fr', 'he', 'it', 'nl', 'no', 'pt', 'ru', 'se', 'ud', 'zh'];

export const categoryOptions = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

export const sortByOptions = ['relevancy', 'popularity', 'publishedAt'];

export const searchIn = ['title', 'description', 'content'];

export const pageSizeOptions = ['7', '15', '20', '50', '100'];

export const defaultOptions = {
  apiKey: import.meta.env.VITE_API_KEY,
  sources: [],
  page: 1,
};

export const everythingDefaultOptions = {
  url: 'https://newsapi.org/v2/everything',
  q: 'apple',
  searchIn: 'content',
  domains: '',
  excludeDomains: '',
  from: '',
  to: '',
  language: 'en',
  sortBy: 'relevancy',
  pageSize: '15',
};

export const topHeadlinesDefaultOptions = {
  url: 'https://newsapi.org/v2/top-headlines',
  country: 'us',
  category: '',
  pageSize: '7',
  q: '',
};

export const formTypeSettings = {
  q: { type: 'text' },
  searchIn: { type: 'select', options: searchIn, multiple: true, result: 'text'  },
  sources: { type: 'text' },
  domains: { type: 'text' },
  excludeDomains: { type: 'text' },
  from: { type: 'date' },
  to: { type: 'date' },
  language: { type: 'select', options: languageOptions, multiple: false },
  sortBy: { type: 'select', options: sortByOptions, multiple: false },
  pageSize: { type: 'select', options: pageSizeOptions, multiple: false },
  country: { type: 'select', options: countryOptions, multiple: false },
  category: { type: 'select', options: categoryOptions, multiple: false },
};
