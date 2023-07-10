import { observable, runInAction, makeAutoObservable } from 'mobx';
import { fetchArticles } from 'services/articlesService';
import {
  countryOptions,
  categoryOptions,
  sortByOptions,
  defaultOptions,
  everythingDefaultOptions,
  topHeadlinesDefaultOptions,
} from 'stores/options';

class ArticlesStore {
  articles = observable([]);
  loading = observable(false);
  error = observable(null);

  countryOptions = countryOptions;
  categoryOptions = categoryOptions;
  sortByOptions = sortByOptions;

  everythingOptions = {
    ...defaultOptions,
    ...everythingDefaultOptions,
  };

  topHeadlinesOptions = {
    ...defaultOptions,
    ...topHeadlinesDefaultOptions,
  };

  everythingCache = observable.map();
  topHeadlinesCache = observable.map();

  constructor() {
    makeAutoObservable(this);
  }

  fetchArticles = async (options, cache) => {
    if (cache.has(JSON.stringify(options))) {
      this.articles.replace(cache.get(JSON.stringify(options)));
      return;
    }

    this.loading = true;

    try {
      const { url, ...params } = options;
      params.sources = params.sources.join(',');

      const articles = await fetchArticles(url, params);

      runInAction(() => {
        this.articles.replace(articles);
        cache.set(JSON.stringify(options), articles);
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

  fetchEverything = async () => {
    await this.fetchArticles(this.everythingOptions, this.everythingCache);
  };

  fetchTopHeadlines = async () => {
    await this.fetchArticles(this.topHeadlinesOptions, this.topHeadlinesCache);
  };

  clearCache = (cache) => {
    cache.clear();
  };

  updateEverythingOptions = (options) => {
    this.everythingOptions = { ...this.everythingOptions, ...options };
    this.clearCache(this.everythingCache);
  };

  updateTopHeadlinesOptions = (options) => {
    this.topHeadlinesOptions = { ...this.topHeadlinesOptions, ...options };
    this.clearCache(this.topHeadlinesCache);
  };
}

const articlesStore = new ArticlesStore();
export default articlesStore;
