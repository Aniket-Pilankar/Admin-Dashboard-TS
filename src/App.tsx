import './App.css';

import { Route, Routes } from 'react-router-dom';

import Form from './components/Form';
import SidebarComp from './components/Sidebar';
import Topbar from './components/Topbar';
import GlobalProviders from './GlobalProviders';

function App() {
  return (
    <GlobalProviders>
      <div className="app">
        <SidebarComp />
        <main className="content">
          <Topbar />
          <Routes>
            <Route path="/form" element={<Form />} />
          </Routes>
        </main>
      </div>
    </GlobalProviders>
  );
}

export default App;
