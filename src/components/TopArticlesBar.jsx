import PropTypes from 'prop-types';
import articlesStore from 'stores/ArticlesStore';
import ArticleLiteCard from 'components/ArticleLiteCard';
import withArticlesData from 'components/withArticlesData';

export const TopArticlesBar = ({ articles }) => {
  return (
    <aside className="ml-4 sm:w-1/2 md:w-1/3 lg:w-1/4">
      {articles.map((article, index) => (
        <ArticleLiteCard key={index} article={article} />
      ))}
    </aside>
  );
};

TopArticlesBar.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      source: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string.isRequired,
      }),
      author: PropTypes.string,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      url: PropTypes.string.isRequired,
      urlToImage: PropTypes.string,
      publishedAt: PropTypes.string,
      content: PropTypes.string,
    }),
  ).isRequired,
};

export const TopArticlesBarWithData = withArticlesData(
  TopArticlesBar,
  articlesStore.fetchTopHeadlines,
  articlesStore.topHeadlines,
);
