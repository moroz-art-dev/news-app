import { observable, runInAction, makeAutoObservable } from 'mobx';
import {
  countryOptions,
  categoryOptions,
  sortByOptions,
  typeNewsOptions,
  defaultOptions,
  everythingDefaultOptions,
  topHeadlinesDefaultOptions,
} from 'stores/options';

class ArticlesStore {
  articles = observable([]);
  loading = observable(false);
  error = observable(null);

  typeNewsOptions = typeNewsOptions;
  countryOptions = countryOptions;
  categoryOptions = categoryOptions;
  sortByOptions = sortByOptions;

  everythingOptions = observable({
    ...defaultOptions,
    ...everythingDefaultOptions,
  });

  topHeadlinesOptions = observable({
    ...defaultOptions,
    ...topHeadlinesDefaultOptions,
  });

  constructor() {
    makeAutoObservable(this);
  }

  fetchEverything = async () => {
    this.loading = true;

    try {
      const { url, ...params } = this.everythingOptions;
      params.sources = params.sources.join(',');

      console.log(`${url}?${new URLSearchParams(params)}`);

      const response = await fetch(`${url}?${new URLSearchParams(params)}`);

      if (!response.ok) {
        throw new Error('Request failed');
      }

      const data = await response.json();

      if (data.status === 'error') {
        throw new Error(data.message);
      }

      runInAction(() => {
        this.articles.replace(data.articles);
        this.loading = false;
        this.error = null;
      });
    } catch (error) {
      runInAction(() => {
        this.articles.replace([]);
        this.loading = false;
        this.error = error.message;
      });
    }
  };

  fetchTopHeadlines = async () => {
    this.loading = true;

    try {
      const { url, ...params } = this.topHeadlinesOptions;
      params.sources = params.sources.join(',');

      const response = await fetch(`${url}?${new URLSearchParams(params)}`);

      if (!response.ok) {
        throw new Error('Request failed');
      }

      const data = await response.json();

      if (data.status === 'error') {
        throw new Error(data.message);
      }

      runInAction(() => {
        this.articles.replace(data.articles);
        this.loading = false;
        this.error = null;
      });
    } catch (error) {
      runInAction(() => {
        this.articles.replace([]);
        this.loading = false;
        this.error = error.message;
      });
    }
  };
}

const articlesStore = new ArticlesStore();
export default articlesStore;
