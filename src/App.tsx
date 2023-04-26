import './App.css';

import Topbar from './components/Topbar';
import GlobalProviders from './GlobalProviders';

function App() {
  return (
    <GlobalProviders>
      <div className="app">
        <main className="content">
          <Topbar />
        </main>
      </div>
    </GlobalProviders>
  );
}

export default App;
