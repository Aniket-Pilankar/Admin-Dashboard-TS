import './App.css';

import { Route, Routes } from 'react-router-dom';

import BarChart from './components/BarChart';
import Form from './components/Form';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
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
            {/* <Route path="/" element={<Dashboard />} /> */}
            {/* <Route path="/team" element={<Team />} /> */}
            {/* <Route path="/contacts" element={<Contacts />} /> */}
            {/* <Route path="/invoices" element={<Invoices />} /> */}
            <Route path="/form" element={<Form />} />
            <Route path="/bar" element={<BarChart />} />
            <Route path="/pie" element={<PieChart />} />
            <Route path="/line" element={<LineChart />} />
            {/* <Route path="/faq" element={<FAQ />} /> */}
          </Routes>
        </main>
      </div>
    </GlobalProviders>
  );
}

export default App;
