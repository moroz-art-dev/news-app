import { observable, runInAction, makeAutoObservable } from 'mobx';
import { fetchArticlesData } from 'services/articlesService';
import {
  countryOptions,
  categoryOptions,
  sortByOptions,
  defaultOptions,
  everythingDefaultOptions,
  topHeadlinesDefaultOptions,
} from 'stores/options';

class ArticlesStore {
  everything = {
    articles: observable([]),
    loading: observable(false),
    error: observable(null),
    options: {
      ...defaultOptions,
      ...everythingDefaultOptions,
    },
    cache: observable.map(),
  };

  topHeadlines = {
    articles: observable([]),
    loading: observable(false),
    error: observable(null),
    options: {
      ...defaultOptions,
      ...topHeadlinesDefaultOptions,
    },
    cache: observable.map(),
  };

  countryOptions = countryOptions;
  categoryOptions = categoryOptions;
  sortByOptions = sortByOptions;

  constructor() {
    makeAutoObservable(this);
  }

  fetchArticles = async (target, loading, error) => {
    const { options, cache } = target;

    if (cache.has(JSON.stringify(options))) {
      target.articles.replace(cache.get(JSON.stringify(options)));
      return;
    }

    loading.set(true);

    try {
      const { url, ...params } = options;
      params.sources = params.sources.join(',');

      const articles = await fetchArticlesData(url, params);

      runInAction(() => {
        target.articles.replace(articles);
        cache.set(JSON.stringify(options), articles);
        loading.set(false);
        error.set(null);
      });
    } catch (err) {
      runInAction(() => {
        target.articles.replace([]);
        loading.set(false);
        error.set(err.message);
      });
    }
  };

  fetchEverything = async () => {
    await this.fetchArticles(this.everything, this.everything.loading, this.everything.error);
  };

  fetchTopHeadlines = async () => {
    await this.fetchArticles(this.topHeadlines, this.topHeadlines.loading, this.topHeadlines.error);
  };

  clearCache = (cache) => {
    cache.clear();
  };

  updateEverythingOptions = (options) => {
    this.everything.options = { ...this.everything.options, ...options };
    this.clearCache(this.everything.cache);
  };

  updateTopHeadlinesOptions = (options) => {
    this.topHeadlines.options = { ...this.topHeadlines.options, ...options };
    this.clearCache(this.topHeadlines.cache);
  };
}

const articlesStore = new ArticlesStore();
export default articlesStore;
