import { observer } from 'mobx-react-lite';
import articlesStore from 'stores/ArticlesStore';
import SettingsForm from 'components/SettingsForm';

const SettingsComponent = observer(() => {
  const { everything, topHeadlines, updateEverythingOptions, updateTopHeadlinesOptions } = articlesStore;

  return (
    <div className="container mx-auto mt-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4">
          <h2 className="mb-4 text-xl">Everything Options</h2>
          <SettingsForm options={everything.options} updateOptions={updateEverythingOptions} />
        </div>
        <div className="bg-white p-4">
          <h2 className="mb-4 text-xl">TopHeadlines Options</h2>
          <SettingsForm options={topHeadlines.options} updateOptions={updateTopHeadlinesOptions} />
        </div>
      </div>
    </div>
  );
});

export default SettingsComponent;
