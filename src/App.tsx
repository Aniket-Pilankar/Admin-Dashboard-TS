import './App.css';

import { Route, Routes } from 'react-router-dom';

import BarChart from './components/BarChart';
import Calendar from './components/Calendar';
import Dashboard from './components/dashboard';
import FAQ from './components/FAQ';
import Form from './components/form';
import GeographyChart from './components/GeographyChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import SidebarComp from './components/Sidebar';
import Team from './components/team';
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
            <Route path="/" element={<Dashboard />} />
            <Route path="/team" element={<Team />} />
            <Route path="/form" element={<Form />} />
            <Route path="/bar" element={<BarChart />} />
            <Route path="/pie" element={<PieChart />} />
            <Route path="/line" element={<LineChart />} />
            <Route path="/geography" element={<GeographyChart />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
      </div>
    </GlobalProviders>
  );
}

export default App;
