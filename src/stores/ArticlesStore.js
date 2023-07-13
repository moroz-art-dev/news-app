import { observable, makeObservable, action, runInAction } from 'mobx';
import { fetchArticlesData } from 'services/articlesService';
import { defaultOptions, everythingDefaultOptions, topHeadlinesDefaultOptions } from 'stores/options';

class ArticlesStore {
  settingsVisible = false;

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

  constructor() {
    makeObservable(this, {
      settingsVisible: observable,
      everything: observable,
      topHeadlines: observable,
      fetchArticles: action,
      fetchEverything: action,
      fetchTopHeadlines: action,
      clearCache: action,
      updateEverythingOptions: action,
      updateTopHeadlinesOptions: action,
      toggleSettings: action,
    });
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
    this.fetchEverything();
  };

  updateTopHeadlinesOptions = (options) => {
    this.topHeadlines.options = { ...this.topHeadlines.options, ...options };
    this.clearCache(this.topHeadlines.cache);
    this.fetchTopHeadlines();
  };

  toggleSettings = () => {
    this.settingsVisible = !this.settingsVisible;
  };

  updateOptions = (targetKey, newOptions) => {
    const target = this[targetKey];

    if (!target) {
      throw new Error(`Invalid target: ${targetKey}`);
    }

    const { options, cache } = target;

    target.options = { ...options, ...newOptions };

    this.clearCache(cache);

    const fetchMethod = `fetch${targetKey.charAt(0).toUpperCase()}${targetKey.slice(1)}`;
    if (typeof this[fetchMethod] === 'function') {
      this[fetchMethod]();
    }
  };
}

const articlesStore = new ArticlesStore();
export default articlesStore;
