import { observer } from 'mobx-react-lite';
import Header from 'components/Header';
import { ArticlesGridWithData } from 'components/ArticlesGrid';
import { TopArticlesBarWithData } from 'components/TopArticlesBar';
import Footer from 'components/Footer';

import './App.css';

const App = observer(() => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="grow bg-gray-100">
        <div className="container mx-auto flex w-full justify-between">
          <ArticlesGridWithData />
          <TopArticlesBarWithData />
        </div>
      </main>
      <Footer />
    </div>
  );
});

export default App;
