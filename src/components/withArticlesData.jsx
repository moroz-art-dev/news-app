import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import articlesStore from 'stores/ArticlesStore';
import Error from 'components/Error';
import Loading from 'components/Loading';

const withArticlesData = (WrappedComponent, fetchData) => {
  const WithArticlesData = observer(() => {
    useEffect(() => {
      fetchData();
    }, []);

    if (articlesStore.loading) {
      return <Loading />;
    }

    if (articlesStore.error) {
      return <Error message={articlesStore.error} />;
    }

    return <WrappedComponent articles={articlesStore.articles} />;
  });

  return WithArticlesData;
};

export default withArticlesData;
