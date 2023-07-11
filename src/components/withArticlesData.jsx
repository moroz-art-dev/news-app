import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import Error from 'components/Error';
import Loading from 'components/Loading';

const withArticlesData = (WrappedComponent, fetchData, articlesStoreProp) => {
  const WithArticlesData = observer(() => {
    useEffect(() => {
      fetchData();
    }, []);

    if (articlesStoreProp.loading.get()) {
      return <Loading />;
    }

    if (articlesStoreProp.error.get()) {
      return <Error message={articlesStoreProp.error.get()} />;
    }

    return <WrappedComponent articles={articlesStoreProp.articles} />;
  });

  return WithArticlesData;
};

export default withArticlesData;
