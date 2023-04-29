import { Box } from '@mui/material';

import PieChartComp from '../chart-components/PieChart';
import Header from './Header';

const PieChart = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChartComp />
      </Box>
    </Box>
  );
};

export default PieChart;
