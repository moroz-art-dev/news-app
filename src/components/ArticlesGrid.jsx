import PropTypes from 'prop-types';
import articlesStore from 'stores/ArticlesStore';
import ArticleCard from 'components/ArticleCard';
import withArticlesData from 'components/withArticlesData';

export const ArticlesGrid = ({ articles }) => {
  return (
    <section className="grow">
      <div className="container mx-auto grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>
    </section>
  );
};

ArticlesGrid.propTypes = {
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

export const ArticlesGridWithData = withArticlesData(
  ArticlesGrid,
  articlesStore.fetchEverything,
  articlesStore.everything,
);
