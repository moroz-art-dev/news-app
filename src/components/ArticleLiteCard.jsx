import PropTypes from 'prop-types';

const ArticleLiteCard = ({ article }) => {
  return (
    <div className="mb-4 rounded-lg bg-white p-4 shadow-md">
      <h2 className="mb-2 text-xl font-bold">{article.title}</h2>
      {article.description && <p className="mb-4 text-gray-500">{article.description}</p>}
      <div className="flex justify-between">
        {article.source && <span className="text-sm text-gray-400">{article.source.name}</span>}
        {article.publishedAt && <span className="text-sm text-gray-400">{article.publishedAt}</span>}
      </div>
    </div>
  );
};

ArticleLiteCard.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    source: PropTypes.shape({
      name: PropTypes.string,
    }),
    publishedAt: PropTypes.string,
  }).isRequired,
};

export default ArticleLiteCard;
