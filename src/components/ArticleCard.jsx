import PropTypes from 'prop-types';

const ArticleCard = ({ article }) => {
  return (
    <div className="mb-4 rounded-lg bg-white p-4 shadow-md">
      {article.urlToImage && (
        <img src={article.urlToImage} alt={article.title} className="mb-4 h-40 w-full object-cover" />
      )}
      <h2 className="mb-2 text-xl font-bold">{article.title}</h2>
      {article.description && <p className="mb-4 text-gray-500">{article.description}</p>}
      <div className="flex justify-between">
        {article.source && <span className="text-sm text-gray-400">{article.source.name}</span>}
        {article.publishedAt && <span className="text-sm text-gray-400">{article.publishedAt}</span>}
      </div>
    </div>
  );
};

ArticleCard.propTypes = {
  article: PropTypes.shape({
    urlToImage: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    source: PropTypes.shape({
      name: PropTypes.string,
    }),
    publishedAt: PropTypes.string,
  }).isRequired,
};

export default ArticleCard;
