import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faTimes } from '@fortawesome/free-solid-svg-icons';
import { observer } from 'mobx-react-lite';
import articlesStore from 'stores/ArticlesStore';
import SettingsComponent from 'components/SettingsComponent';

const Header = observer(() => {
  const handleSettingsClick = () => {
    articlesStore.toggleSettings();
  };

  return (
    <header className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between text-white">
        <div className="flex items-center">
          <span className="mr-2">ARTICLES</span>
          <FontAwesomeIcon icon={articlesStore.settingsVisible ? faTimes : faCog} onClick={handleSettingsClick} style={{ cursor: 'pointer' }} />
        </div>
      </div>
      {articlesStore.settingsVisible && <SettingsComponent />}
    </header>
  );
});

export default Header;
