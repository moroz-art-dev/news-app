import { observer } from 'mobx-react-lite';

const SettingsComponent = observer(() => {
  return (
    <div className="container mx-auto mt-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4">
          <h2 className="mb-4 text-xl">Everything Options</h2>
        </div>
        <div className="bg-white p-4">
          <h2 className="mb-4 text-xl">TopHeadlines Options</h2>
        </div>
      </div>
    </div>
  );
});

export default SettingsComponent;
